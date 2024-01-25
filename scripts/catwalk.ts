import { exec } from 'node:child_process'
import { readdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { exit } from 'node:process'
import { promisify } from 'node:util'
import type { FlavorName } from '@catppuccin/palette'
import { flavorEntries, flavors } from '@catppuccin/palette'
import { lookpath } from 'lookpath'
import { launch } from 'puppeteer'
import { temporaryDirectoryTask } from 'tempy'

if (!await lookpath('catwalk')) {
  console.error('Catwalk not installed.')
  exit()
}

const OUT = 'assets/catwalk.webp'

const allIcons = await readdir('icons/latte')
const fileIcons = allIcons
  .filter(i => !i.startsWith('folder_') && !i.startsWith('_'))
  .toSorted(() => 0.5 - Math.random())

function generateIcons(flavor: FlavorName) {
  return Array(6)
    .fill(fileIcons.map(i => `${resolve(join('icons', flavor, i))}`))
    .flat()
}

function generateHtml(flavor: FlavorName) {
  const icons = generateIcons(flavor)
  return `
  <html>
    <head>
      <style>
        body {
          color: ${flavors[flavor].colors.text.hex};
          background-color: ${flavors[flavor].colors.mantle.hex};
        }
        .icon {
          width: 32px;
          height: 32px;
        }
        .grid {
          transform: rotate(-30deg) translate(0%, -50%);
          width: 200%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 5px;
        }
      </style>
    </head>
    <body>
    <div class="grid">
        ${icons.map(i => `<img class="icon" src="${i}">`).join('\n')}
      </div>
    </body>
  </html>
`
}

await temporaryDirectoryTask(async (tmp) => {
  const images = await Promise.all(flavorEntries.map(async ([flavor]) => {
    const htmlPath = join(tmp, `${flavor}.html`)
    const screenshotPath = join(tmp, `${flavor}.png`)
    await writeFile(htmlPath, generateHtml(flavor))
    const browser = await launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.setViewport({
      height: 400,
      width: 700,
      deviceScaleFactor: 3,
    })
    await page.goto(join('file:', htmlPath))
    await page.screenshot({ path: screenshotPath })
    await browser.close()
    return screenshotPath
  }))
  await promisify(exec)(`catwalk ${images.join(' ')} --output="${OUT}"`)
})
