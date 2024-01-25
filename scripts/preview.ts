import { readdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { temporaryWriteTask } from 'tempy'
import { flavors } from '@catppuccin/palette'
import { launch } from 'puppeteer'

const allIcons = await readdir('icons/latte')
const fileIcons = allIcons.filter(i => !i.startsWith('folder_'))
// const folderIcons = allIcons.filter(i => i.startsWith('folder_') && !i.endsWith('_open.svg'))
const icons = fileIcons.toSorted(() => 0.5 - Math.random()).map(i => `${resolve(join('icons', 'latte', i))}`)

// console.log(icons.map(i => resolve(i)))

const html = `
  <html>
    <head>
      <style>
        body {
          color: ${flavors.latte.colors.text.hex};
          background-color: ${flavors.latte.colors.mantle.hex};
        }
        .icon {
          width: 32px;
          height: 32px;
        }
        .grid {
          transform: rotate(-45deg) translate(0%, -50%);
          width: 200%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 3px;
        }
      </style>
    </head>
    <body>
    <div class="grid">
        ${Array(3).fill(icons).flat().map(i => `<img class="icon" src="${i}">`).join('\n')}
      </div>
    </body>
  </html>
`
await temporaryWriteTask(html, async (f) => {
  const browser = await launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.setViewport({
    height: 300,
    width: 600,
    deviceScaleFactor: 3,
  })
  await page.goto(join('file:', f))
  await page.screenshot({
    path: join(`latte.png`),
    // fullPage: true,
    omitBackground: true,
    // captureBeyondViewport: true,
  })
  await browser.close()
}, { extension: 'html' })
await writeFile('preview.html', html)
