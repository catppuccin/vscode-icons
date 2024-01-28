import type { FlavorName } from '@catppuccin/palette'
import type { Uri } from 'vscode'

export interface Options {
  hidesExplorerArrows: boolean
}

export interface BaseIcons {
  file: string
  folder: string
  folderExpanded: string
  rootFolder: string
  rootFolderExpanded: string
}

export type FileIcons = Record<string, {
  fileExtensions?: string[]
  fileNames?: string[]
  languageIds?: string[]
}>

export type FolderIcons = Record<string, {
  folderNames?: string[]
}>

export type Theme = Options & BaseIcons & {
  fileIcons: FileIcons
  folderIcons: FolderIcons
}

export type IconDefinitions = Record<string, { iconPath: string }>

export type VscTheme = Options & BaseIcons & {
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

export type Flavor = FlavorName

export type ThemePaths = Record<Flavor, {
  theme: Uri
  icons: Uri
}>

export interface Config {
  hidesExplorerArrows: boolean
  specificFolderIcons: boolean
}
