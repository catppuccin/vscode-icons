import { readdir } from 'node:fs/promises'
import { exit } from 'node:process'
import consola from 'consola'
import { join, resolve } from 'pathe'
import { filename } from 'pathe/utils'
import { extensions, files, folders, foldersExpanded, languages } from '@/associations'

const rawIcons = (await readdir(resolve(join('src', 'icons')))).map(filename)
const icons = (await readdir(resolve('icons'))).map(filename)

function findMissingIcons(type, object) {
  consola.info(`Checking for missing ${type} icons...`)
  const iconKeys = Object.keys(object)
  const missingIcons = iconKeys.filter(i => !icons.includes(i))
  if (missingIcons.length > 0) {
    const missingIconsStr = missingIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
    consola.error(`Found ${missingIcons.length} missing ${type} icon(s):${missingIconsStr}`)
  }
  else {
    consola.success(`No missing ${type} icons found.\n`)
  }
  return missingIcons
}

consola.info('Checking for unused raw icons in `src/icons`...')
const unusedRawIcons = rawIcons.filter(i => !icons.includes(i))
if (unusedRawIcons.length > 0) {
  const unusedrawIconsStr = unusedRawIcons.reduce((s, i) => `${s}\n\t- ${i}`, '')
  consola.warn(`Found ${unusedRawIcons.length} unused raw icon(s):${unusedrawIconsStr}`)
}
else {
  consola.success('No unused raw icons found.')
}

const missing = [
  findMissingIcons('language', languages),
  findMissingIcons('extension', extensions),
  findMissingIcons('file', files),
  findMissingIcons('folder', folders),
  findMissingIcons('expanded folder', foldersExpanded),
].reduce((acc, cur) => acc + cur.length, 0)

exit(missing)
