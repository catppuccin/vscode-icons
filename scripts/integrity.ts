/**
 * Ensure all default associations refer to existing icons.
 */

import { readdir } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { exit } from 'node:process'
import { consola } from 'consola'
import { fileIcons } from '~/defaults/fileIcons'
import { folderIcons } from '~/defaults/folderIcons'

let exitCode = 0

const ICONS = 'icons'
const flavors = await readdir(resolve(ICONS))

consola.info('Running integrity check...')

await Promise.all(flavors.map(async (f) => {
  const icons = await readdir(resolve(join(ICONS, f)))

  Object.keys(fileIcons).forEach((fi) => {
    if (!icons.some(i => basename(i, '.svg') === fi)) {
      consola.error(`Missing ${f} icon for ${fi}`)
      exitCode++
    }
  })

  Object.keys(folderIcons).forEach((fi) => {
    if (!icons.some(i => basename(i, '.svg') === `folder_${fi}`)) {
      consola.error(`Missing ${f} folder icon for ${fi}`)
      exitCode++
    }
    if (!icons.some(i => basename(i, '.svg') === `folder_${fi}_open`)) {
      consola.error(`Missing ${f} open folder icon for ${fi}`)
      exitCode++
    }
  })
}))

if (exitCode === 0)
  consola.success('Integrity check passed.')

exit(exitCode)
