import { basename, join } from 'node:path'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { flavorEntries } from '@catppuccin/palette'

import { options } from '../defaults/options'
import { baseIcons } from '../defaults/baseIcons'
import { folderIconEntries } from '../defaults/folderIcons'
import { fileIconEntries } from '../defaults/fileIcons'

const root = join(__dirname, '../..')
const flavors = flavorEntries.map(([f]) => f)

async function generateThemes() {
  await mkdir(join(root, 'themes'), { recursive: true })

  await Promise.all(flavors.map(async (flavor) => {
    const icons = await readdir(join(root, `icons/${flavor}`))
    const iconDefinitions = icons.reduce((d, i) => ({
      ...d,
      [basename(i, '.svg')]: {
        iconPath: `../icons/${flavor}/${i}`,
      },
    }), {})

    const folderIcons = folderIconEntries.reduce(
      ({ folderNames, folderNamesExpanded }, [name, icon]) => ({
        folderNames: {
          ...folderNames,
          ...icon.folderNames?.reduce((a, c) => ({ ...a, [c]: `folder_${name}` }), {}),
        },
        folderNamesExpanded: {
          ...folderNamesExpanded,
          ...icon.folderNames?.reduce((a, c) => ({ ...a, [c]: `folder_${name}_open` }), {}),
        },
      }),
      {
        folderNames: {},
        folderNamesExpanded: {},
      },
    )

    const fileIcons = fileIconEntries.reduce(
      ({ languageIds, fileExtensions, fileNames }, [name, icon]) => ({
        languageIds: {
          ...languageIds,
          ...icon.languageIds?.reduce((a, c) => ({ ...a, [c]: name }), {}),
        },
        fileExtensions: {
          ...fileExtensions,
          ...icon.fileExtensions?.reduce((a, c) => ({ ...a, [c]: name }), {}),
        },
        fileNames: {
          ...fileNames,
          ...icon.fileNames?.reduce((a, c) => ({ ...a, [c]: name }), {}),
        },
      }),
      {
        languageIds: {},
        fileExtensions: {},
        fileNames: {},
      },
    )

    const theme = {
      ...options,
      ...baseIcons,
      ...fileIcons,
      ...folderIcons,
      iconDefinitions,
    }

    await writeFile(
      join(root, `themes/${flavor}.json`),
      JSON.stringify(theme, null, 2),
    )
  }))
}

export default generateThemes
