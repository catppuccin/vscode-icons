/**
 * Build themes and extension.
 */

import { existsSync } from 'node:fs'
import { cp, readdir, rm, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { exit } from 'node:process'
import { flavorEntries } from '@catppuccin/palette'
import { consola } from 'consola'
import { build } from 'tsup'
import { compileTheme } from '~/utils/themes'

const DIST = 'dist'
const flavors = flavorEntries.map(([f]) => f)

try {
  consola.info('Deleting previous build...')

  // cleanup
  if (existsSync(DIST))
    await rm(DIST, { recursive: true })

  consola.success('Deleted previous build.')
}
catch (error) {
  consola.error('Failed to delete previous build: ', error)
  exit(1)
}

try {
  consola.info('Copying icon SVGs to dist...')

  // copy icons to dist
  await Promise.all(flavors.map(async (f) => {
    await cp(join('icons', f), join(DIST, f, 'icons'), { recursive: true })
  }))

  // copy css-vars/unflavored icons to dist
  await cp(join('icons', 'css-variables'), join(DIST, 'unflavored'), { recursive: true })

  consola.success('Copied icon SVGs to dist.')
}
catch (error) {
  consola.error('Failed to copy icon SVGs: ', error)
  exit(1)
}

try {
  consola.info('Building themes and icon definitions...')

  // generate iconDefinitions.json file and save to dist
  const icons = await readdir(join(DIST, flavors[0], 'icons'))
  const iconDefinitions = icons.reduce((d, i) => ({
    ...d,
    [basename(i, '.svg')]: { iconPath: `./icons/${i}` },
  }), {} as Record<string, { iconPath: string }>)
  await writeFile(
    join(DIST, 'iconDefinitions.json'),
    JSON.stringify(iconDefinitions, null, 2),
  )

  // compile theme.json and write to dist
  const theme = compileTheme({}, iconDefinitions)
  await Promise.all(flavors.map(async (f) => {
    await writeFile(
      join(DIST, f, 'theme.json'),
      JSON.stringify(theme, null, 2),
    )
  }))

  consola.success('Built themes and icon definitions.')
}
catch (error) {
  consola.error('Failed to build themes or icon definitions: ', error)
  exit(1)
}

try {
  consola.info('Building VSC extension...')

  // build extension runtime
  await build({
    entry: ['src/main.ts', 'src/browser.ts'],
    format: ['cjs'],
    external: ['vscode'],
    minify: true,
    shims: true,
  })

  consola.success('Built VSC extension.')
}
catch (error) {
  consola.error('Failed to build VSC extension: ', error)
  exit(1)
}
