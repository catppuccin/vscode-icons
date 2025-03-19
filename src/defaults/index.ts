import type { Config } from '~/types'
import { fileExtensions, fileNames, languageIds } from './fileIcons'
import { folderNames } from './folderIcons'

export const defaultConfig: Config = {
  hidesExplorerArrows: false,
  specificFolders: true,
  associations: {
    languageIds,
    fileExtensions,
    fileNames,
    folderNames,
  },
  monochrome: false,
}
