export const folders: IconMap = {
  folder_src: ['src', 'srcs', 'source', 'sources', 'code'],
}

export const foldersExpanded: IconMap = Object.entries(folders).reduce(
  (acc, [icon, langs]) => ({ ...acc, [`${icon}__open`]: langs }),
  {},
)
