import { readdir, unlink, writeFile } from 'node:fs/promises'
import { filename } from 'pathe/utils'
import { join, resolve } from 'pathe'
import { splitByCase } from 'scule'
import { ensureDir, remove } from 'fs-extra'
import { type Variants, variants } from '@catppuccin/palette'
import { launch } from 'puppeteer'
import consola from 'consola'
import { catppuccinVariants } from '@/palettes'

const THEMES = resolve('themes')
const PREVIEWS = resolve(join('assets', 'previews'))

const generateHtml = (files: string[], folders: string[], flavor: keyof Variants<any>) => {
  const tags = (iconfiles: string[]) => iconfiles.map(icon => `
    <div style="display: flex; align-items: center;">
      <img style="width: 25px; margin: 2px;" src="../../themes/${flavor}/icons/${icon}" />
      <span style="color: ${variants[flavor].text.hex}; margin-left: 10px; text-transform: capitalize;">
        ${splitByCase(filename(icon), ['_']).join(' ')}
      </span>
    </div>
  `).reduce((a, c) => a + c, '')

  const grid = (content: string) => `
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
      ${content}
    </div>
  `

  return `
    <html>
      <body style="font-family: sans-serif; font-size: 14px;">
        <div style="background-color: ${variants[flavor].mantle.hex}; padding: 25px; border-radius: 25px;">
          ${grid(tags(files))}
          <div style="margin: 25px 0;"/>
          ${grid(tags(folders))}
        </div>
      </body>
    </html>
  `
}

const generateIconOnlyHtml = (files: string[], folders: string[], flavor: keyof Variants<any>) => {
  const tags = (icons: string[]) => icons.map(icon =>
    `<img style="width: 25px; margin: 2px;" src="../../themes/${flavor}/icons/${icon}" />`,
  ).reduce((a, c) => a + c, '')

  return `
    <html>
      <body style="font-family: sans-serif; font-size: 14px;">
        <div style="background-color: ${variants[flavor].mantle.hex}; padding: 25px; border-radius: 25px;">
          <div style="justify-items: center; display: grid; grid-template-columns: repeat(15, 1fr); gap: 10px;">
           ${tags(files)}
          </div>
          <div style="margin: 25px 0;"/>
          <div style="justify-items: center; display: grid; grid-template-columns: repeat(15, 1fr); gap: 10px;">
          ${tags(folders)}
         </div>
        </div>
      </body>
    </html>
  `
}

await remove(PREVIEWS)
await ensureDir(PREVIEWS)
const icons = await readdir(join(THEMES, 'mocha', 'icons'))

const [folderIcons, fileIcons] = icons.reduce(
  (acc, cur) =>
    cur.startsWith('folder')
      ? (cur.endsWith('open.svg') || cur.endsWith('root.svg'))
          ? acc
          : [[...acc[0], cur], acc[1]]
      : [acc[0], [...acc[1], cur]],
  [[], []],
)

consola.info('Building previews...')
await Promise.all(catppuccinVariants.map(async (flavor) => {
  const FILE_PREVIEW = join(PREVIEWS, `${flavor}.html`)
  const FILE_ICON_PREVIEW = join(PREVIEWS, `${flavor}-icons.html`)
  await writeFile(FILE_PREVIEW, generateHtml(fileIcons, folderIcons, flavor))
  await writeFile(FILE_ICON_PREVIEW, generateIconOnlyHtml(fileIcons, folderIcons, flavor))
  const browser = await launch()
  const page = await browser.newPage()
  await page.setViewport({ height: 10, width: 1200 })
  await page.goto(join('file:', FILE_PREVIEW))
  await page.screenshot({
    path: join(PREVIEWS, `${flavor}.png`),
    fullPage: true,
    omitBackground: true,
  })
  await page.setViewport({ height: 10, width: 800 })
  await page.goto(join('file:', FILE_ICON_PREVIEW))
  await page.screenshot({
    path: join(PREVIEWS, `${flavor}-icons.png`),
    fullPage: true,
    omitBackground: true,
  })
  await browser.close()
  await unlink(FILE_PREVIEW)
  await unlink(FILE_ICON_PREVIEW)
}))

consola.success(`Built ${catppuccinVariants.length} preview files successfully!`)
