import { readdir, unlink, writeFile } from 'node:fs/promises'
import { join, resolve } from 'pathe'
import { ensureDir, remove } from 'fs-extra'
import { type Variants, variants } from '@catppuccin/palette'
import { launch } from 'puppeteer'
import consola from 'consola'
import { catppuccinVariants } from '@/palettes'

const THEMES = resolve('themes')
const PREVIEWS = resolve(join('assets', 'previews'))

function generateIconOnlyHtml(scale: number, files: string[], folders: string[], flavor: keyof Variants<any>) {
  const tags = (icons: string[]) => icons.map(icon =>
    `<img style="width: ${scale * 16}px; margin: 2px;" src="../../themes/${flavor}/icons/${icon}" />`,
  ).reduce((a, c) => a + c, '')

  return `
    <html>
      <body style="font-family: sans-serif; font-size: 14px;">
        <div style="background-color: ${variants[flavor].mantle.hex}; padding: 16px; border-radius: 16px;">
          <div style="justify-items: center; display: grid; grid-template-columns: repeat(15, 1fr); gap: 10px;">
           ${tags(files)}
          </div>
          <div style="margin: 16px 0;"/>
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
const iconsPath = join(THEMES, 'latte', 'icons')
await unlink(join(iconsPath, '.DS_Store')).catch(() => {})
const icons = await readdir(join(THEMES, 'latte', 'icons'))

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
  const FILE_ICON_PREVIEW = join(PREVIEWS, `${flavor}-icons.html`)
  const FILE_ICON_PREVIEW_2x = join(PREVIEWS, `${flavor}-icons@2x.html`)
  await writeFile(FILE_ICON_PREVIEW, generateIconOnlyHtml(1, fileIcons, folderIcons, flavor))
  await writeFile(FILE_ICON_PREVIEW_2x, generateIconOnlyHtml(2, fileIcons, folderIcons, flavor))
  const browser = await launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.setViewport({ height: 10, width: 640 })
  await page.goto(join('file:', FILE_ICON_PREVIEW))
  await page.screenshot({
    path: join(PREVIEWS, `${flavor}-icons.png`),
    fullPage: true,
    omitBackground: true,
  })
  await page.setViewport({ height: 10, width: 640 * 2 })
  await page.goto(join('file:', FILE_ICON_PREVIEW_2x))
  await page.screenshot({
    path: join(PREVIEWS, `${flavor}-icons@2x.png`),
    fullPage: true,
    omitBackground: true,
  })
  await browser.close()
  await unlink(FILE_ICON_PREVIEW)
  await unlink(FILE_ICON_PREVIEW_2x)
}))

consola.success(`Built ${catppuccinVariants.length} preview files successfully!`)
