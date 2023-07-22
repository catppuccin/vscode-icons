import { readdir, unlink, writeFile } from 'node:fs/promises'
import { join, resolve } from 'pathe'
import { ensureDir, remove } from 'fs-extra'
import { launch } from 'puppeteer'
import consola from 'consola'
import { type CattppucinVariant, catppuccinVariants, varToHex } from '@/palettes'

const THEMES = resolve('themes')
const PREVIEWS = resolve(join('assets', 'previews'))

function generateIconOnlyHtml(scale: number, files: string[], folders: string[], flavor: CattppucinVariant) {
  const s = (v: number): number => scale * v

  const tags = (icons: string[]) => icons.map(icon =>
    `<img style="width: ${s(16)}px; margin: ${s(2)}px;" src="../../themes/${flavor}/icons/${icon}" />`,
  ).reduce((a, c) => a + c, '')

  return `
    <html>
      <body style="margin: 0;">
        <div style="background-color: ${varToHex[flavor]['--ctp-mantle']}; padding: ${s(16)}px; border-radius: ${s(16)}px;">
          <div style="justify-items: center; display: grid; grid-template-columns: repeat(15, 1fr); gap: ${s(10)}px;">
           ${tags(files)}
          </div>
          <div style="margin: ${s(8)}px 0;"/>
          <div style="justify-items: center; display: grid; grid-template-columns: repeat(15, 1fr); gap: ${s(10)}px;">
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
