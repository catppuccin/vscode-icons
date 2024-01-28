import { defu } from 'defu'
import { defaultConfig } from '~/defaults'
import type { IconDefinitions, ThemeConfig, VscTheme } from '~/types'

/**
 * Generates a VSC theme from defaults + overrides & icon definitions.
 */
export function compileTheme(overrides: Partial<ThemeConfig>, iconDefinitions: IconDefinitions): VscTheme {
  const {
    associations,
    hidesExplorerArrows,
    specificFolders,
  } = defu(overrides, defaultConfig)

  return {
    hidesExplorerArrows,

    file: '_file',
    folder: '_folder',
    folderExpanded: '_folder_open',
    rootFolder: '_folder',
    rootFolderExpanded: '_folder_open',

    languageIds: associations.languageIds,
    fileExtensions: associations.fileExtensions,
    fileNames: associations.fileNames,

    folderNames: specificFolders ? associations.folderNames : {},
    folderNamesExpanded: specificFolders ? expanded(associations.folderNames) : {},

    iconDefinitions,
  }
}

function expanded(obj: Record<string, string>) {
  return Object.entries(obj).reduce((a, [f, i]) => ({ ...a, [f]: `${i}_open` }), {})
}
