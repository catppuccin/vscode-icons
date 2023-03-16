import { readdir } from 'node:fs/promises'
import { exit } from 'node:process'
import consola from 'consola'
import { join, resolve } from 'pathe'
import { filename } from 'pathe/utils'
import { extensions, files, folders, foldersExpanded, languages } from '@/associations'

const RAW_ICONS = resolve(join('src', 'icons'))
const ICONS = resolve('icons')
const rawIcons = (await readdir(RAW_ICONS)).map(filename)
const icons = (await readdir(ICONS)).map(filename)

consola.info('Checking for unused raw icons in `src/icons`...')
const unusedRawIcons = rawIcons.filter(i => !icons.includes(i))
if (unusedRawIcons.length > 0) {
  const unusedrawIconsStr = unusedRawIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.warn(`Found ${unusedRawIcons.length} unused raw icon(s):${unusedrawIconsStr}`)
}
else {
  consola.success('No unused raw icons found.')
}

consola.info('Checking for missing language icons...')
const langIcons = Object.keys(languages)
const missingLangIcons = langIcons.filter(i => !icons.includes(i))
if (missingLangIcons.length > 0) {
  const missingLangIconsStr = missingLangIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.error(`Found ${missingLangIcons.length} missing language icon(s):${missingLangIconsStr}`)
}
else {
  consola.success('No missing language icons found.\n')
}

consola.info('Checking for missing extension icons...')
const extIcons = Object.keys(extensions)
const missingExtIcons = extIcons.filter(i => !icons.includes(i))
if (missingExtIcons.length > 0) {
  const missingExtIconsStr = missingExtIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.error(`Found ${missingExtIcons.length} missing extension icon(s):${missingExtIconsStr}`)
}
else {
  consola.success('No missing extension icons found.\n')
}

consola.info('Checking for missing file icons...')
const fileIcons = Object.keys(files)
const missingFileIcons = fileIcons.filter(i => !icons.includes(i))
if (missingFileIcons.length > 0) {
  const missingFileIconsStr = missingFileIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.error(`Found ${missingFileIcons.length} missing file icon(s):${missingFileIconsStr}`)
}
else {
  consola.success('No missing file icons found.\n')
}

consola.info('Checking for missing folder icons...')
const folderIcons = Object.keys(folders)
const missingFolderIcons = folderIcons.filter(i => !icons.includes(i))
if (missingFolderIcons.length > 0) {
  const missingFolderIconsStr = missingFolderIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.error(`Found ${missingFolderIcons.length} missing folder icon(s):${missingFolderIconsStr}`)
}
else {
  consola.success('No missing folder icons found.\n')
}

consola.info('Checking for missing expanded folder icons...')
const efolderIcons = Object.keys(foldersExpanded)
const missingEfolderIcons = efolderIcons.filter(i => !icons.includes(i))
if (missingEfolderIcons.length > 0) {
  const missingEfolderIconsStr = missingEfolderIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.error(`Found ${missingEfolderIcons.length} missing expanded folder icon(s):${missingEfolderIconsStr}`)
}
else {
  consola.success('No missing expanded folder icons found.\n')
}

const missing = [
  missingLangIcons,
  missingExtIcons,
  missingFileIcons,
  missingFolderIcons,
  missingEfolderIcons,
].reduce((acc, cur) => acc + cur.length, 0)

exit(missing)
