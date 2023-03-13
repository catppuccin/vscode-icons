import { readFile, readdir, writeFile } from 'node:fs/promises'
import consola from 'consola'
import { join, resolve } from 'pathe'
import { filename } from 'pathe/utils'
import { ensureDir, remove } from 'fs-extra'
import { normalizeSvg } from './normalize'
import { changeViewbox } from './resize'
import { catppuccinVariants } from '@/palettes'
import {
  base,
  extensions,
  files,
  folders,
  foldersExpanded,
  languages,
} from '@/associations'

const ICONS = resolve('icons')
const THEMES = resolve('themes')

const icons = await readdir(ICONS)
await remove(THEMES)

const iconDefinitions = icons.reduce((d, i) => ({
  ...d,
  [filename(i)]: { iconPath: `./icons/${i}` },
}), {})

function flattenMap(map: IconMap) {
  return Object.entries(map).reduce(
    (acc, [icon, ids]) => ({
      ...acc,
      ...ids.reduce((a, id) => ({ ...a, [id]: icon }), {}),
    }),
    {},
  )
}

const theme: Theme = {
  ...base,
  iconDefinitions,
  languageIds: flattenMap(languages),
  fileExtensions: flattenMap(extensions),
  fileNames: flattenMap(files),
  folderNames: flattenMap(folders),
  folderNamesExpanded: flattenMap(foldersExpanded),
}
const themeString = JSON.stringify(theme, null, 2)

consola.info(`Creating ${catppuccinVariants.length} themes...`)
await Promise.all(catppuccinVariants.map(async (variant) => {
  await ensureDir(join(THEMES, variant, 'icons'))
  await writeFile(join(THEMES, variant, 'theme.json'), themeString)
}))

await Promise.all(icons.map(async (icon) => {
  const svg = await readFile(join(ICONS, icon), 'utf8')
  await Promise.all(catppuccinVariants.map(async (variant) => {
    const normalized = normalizeSvg(svg, variant)
    const resized = changeViewbox(normalized, icon.startsWith('folder') ? '0 0 100 100' : '-5 -5 110 110')
    await writeFile(join(THEMES, variant, 'icons', icon), resized)
  }))
}))

consola.success(`Successfully built ${catppuccinVariants.length} themes with ${icons.length} each!`)
