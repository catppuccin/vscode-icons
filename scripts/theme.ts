import { readdir, writeFile } from 'fs/promises'
import { resolve } from 'pathe'
import { filename } from 'pathe/utils'
import {
  base,
  extensions,
  files,
  folders,
  foldersExpanded,
  languages,
} from '@/associations'

const ICONS = resolve('icons')
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

await writeFile('theme.json', JSON.stringify(theme, null, 2))
