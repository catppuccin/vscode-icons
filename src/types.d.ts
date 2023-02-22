export {}

declare global {
  type IconMap = Record<string, string[]>

  type Base = {
    hidesExplorerArrows: boolean
    file: string
    folder: string
    folderExpanded: string
    rootFolder: string
    rootFolderExpanded: string
  }

  type IconDefinitions = Record<string, { iconPath: string }>
  type FileNames = Record<string, string>
  type FileExtensions = Record<string, string>
  type FolderNames = Record<string, string>
  type FolderNamesExpanded = Record<string, string>
  type LanguageIds = Record<string, string>

  type Theme = Base & {
    iconDefinitions: IconDefinitions
    languageIds: LanguageIds
    fileNames?: FileNames
    fileExtensions?: FileExtensions
    folderNames?: FolderNames
    folderNamesExpanded?: FolderNamesExpanded
  }
}
