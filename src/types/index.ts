import type { FlavorName } from '@catppuccin/palette'
import type { Uri } from 'vscode'

/**
 * Config interacting with `<flavor>/theme.json` files.
 */
export interface ThemeConfig {
  hidesExplorerArrows: boolean
  specificFolders: boolean
  associations: {
    languageIds: Record<string, string>
    fileExtensions: Record<string, string>
    fileNames: Record<string, string>
    folderNames: Record<string, string>
  }
}

/**
 * Config interacting with `<flavor>/icons/*.svg` files.
 */
export interface IconsConfig {
  monochrome: boolean
}

/**
 * User facing configuration
 */
export type Config = ThemeConfig & IconsConfig

/**
 * Runtime theme paths
 */
export type ThemePaths = Record<FlavorName, {
  icons: Uri
  theme: Uri
}>
/**
 * Icon name/path mapping.
 * @see https://code.visualstudio.com/api/extension-guides/file-icon-theme#icon-definitions
 */
export type IconDefinitions = Record<string, { iconPath: string }>

/**
 * Icon theme respecting VSC schema.
 * @see https://code.visualstudio.com/api/extension-guides/file-icon-theme#file-association
 */
export interface VscTheme {
  hidesExplorerArrows: boolean
  file: string
  folder: string
  folderExpanded: string
  rootFolder: string
  rootFolderExpanded: string
  languageIds: Record<string, string>
  fileExtensions: Record<string, string>
  fileNames: Record<string, string>
  folderNames: Record<string, string>
  folderNamesExpanded: Record<string, string>
  iconDefinitions: IconDefinitions
}
