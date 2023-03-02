import { readdir, writeFile } from 'fs/promises'
import { variants } from '@catppuccin/palette'
import { join, resolve } from 'pathe'
import { filename } from 'pathe/utils'
import { ensureDir } from 'fs-extra'
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

await Promise.all(Object.keys(variants).map(async (variant) => {
  await ensureDir(join(THEMES, variant, 'icons'))
  await writeFile(join(THEMES, variant, 'theme.json'), themeString)
}))
