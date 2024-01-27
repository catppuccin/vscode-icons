import type { IconDefinitions, Theme, VscTheme } from '~/types'

export function createVscTheme(theme: Theme, iconDefinitions: IconDefinitions): VscTheme {
  const { fileIcons, folderIcons, ...rest } = theme

  const { folderNames, folderNamesExpanded } = Object.entries(folderIcons).reduce(
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

  const { languageIds, fileExtensions, fileNames } = Object.entries(fileIcons).reduce(
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

  return {
    ...rest,
    languageIds,
    fileExtensions,
    fileNames,
    folderNames,
    folderNamesExpanded,
    iconDefinitions,
  }
}
