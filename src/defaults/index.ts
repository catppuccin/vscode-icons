import { fileExtensions, fileNames, languageIds } from './fileIcons'
import { folderNames } from './folderIcons'
import type { Config } from '~/types'

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
