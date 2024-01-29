import { readdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import type { FlavorName } from '@catppuccin/palette'
import { flavorEntries, flavors } from '@catppuccin/palette'
import { launch } from 'puppeteer'
import { temporaryDirectoryTask } from 'tempy'

const allIcons = await readdir('icons/latte')
const fileIcons = allIcons.filter(i => !i.startsWith('folder_') && !i.startsWith('_'))
const folderIcons = allIcons.filter(i => i.startsWith('folder_') && !i.endsWith('_open.svg'))

function iconPath(icon: string, flavor: FlavorName) {
  return `${resolve(join('icons', flavor, icon))}`
}

function generateHtml(flavor: FlavorName) {
  return `
  <html>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space%20Mono">
      <style>
        body {
          font-family: Space Mono, monospace;
          font-size: 20px;
          margin: 0;
        }
        .container {
          color: ${flavors[flavor].colors.text.hex};
          background-color: ${flavors[flavor].colors.mantle.hex};
          width: 1500px;
          display: flex;
          flex-direction: column;
          gap: 50px;
          padding: 30px;
          border-radius: 30px;
        }
        .icon-block {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .icon {
          width: 32px;
          height: 32px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
        .folder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="grid">
          ${fileIcons.map(i => `
            <div class="icon-block">
              <img class="icon" src="${iconPath(i, flavor)}">
              ${i.slice(0, -4)}
            </div>
          `).join('\n')}
        </div>
        <div class="folder-grid">
          ${folderIcons.map(i => `
            <div class="icon-block">
              <img class="icon" src="${iconPath(i, flavor)}">
              ${i.slice(0, -4)}
            </div>
          `).join('\n')}
        </div>
      </div>
    </body>
  </html>
`
}

await temporaryDirectoryTask(async (tmp) => {
  await Promise.all(flavorEntries.map(async ([flavor]) => {
    const htmlPath = join(tmp, `${flavor}.html`)
    const screenshotPath = join('assets', `${flavor}.webp`)
    await writeFile(htmlPath, generateHtml(flavor))
    const browser = await launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.goto(join('file:', htmlPath))
    await page.screenshot({
      type: 'webp',
      path: screenshotPath,
      fullPage: true,
      omitBackground: true,
    })
    await browser.close()
  }))
})
