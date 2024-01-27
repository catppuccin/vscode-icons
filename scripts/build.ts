import { cp, readdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { flavorEntries } from '@catppuccin/palette'
import { build } from 'tsup'
import { rimraf } from 'rimraf'
import { defaults } from '~/defaults'
import { createVscTheme } from '~/hooks/generateTheme'

const DIST = 'dist'
const flavors = flavorEntries.map(([f]) => f)

// CLEANUP
await rimraf(DIST)

// COPY ICONS TO DIST
await Promise.all(flavors.map(async (f) => {
  await cp(join('icons', f), join(DIST, f, 'icons'), { recursive: true })
}))

// GENERATE ICON DEFINITIONS AND SAVE THEM TO DIST
const icons = await readdir(join(DIST, flavors[0], 'icons'))
const iconDefinitions = icons.reduce((d, i) => ({
  ...d,
  [basename(i, '.svg')]: { iconPath: `./icons/${i}` },
}), {} as Record<string, { iconPath: string }>)
await writeFile(
  join(DIST, 'iconDefinitions.json'),
  JSON.stringify(iconDefinitions, null, 2),
)

// CREATE THEME AND INJECT ICON DEFINITIONS
const theme = createVscTheme(defaults, iconDefinitions)

// WRITE THEMES
await Promise.all(flavors.map(async (f) => {
  await writeFile(
    join(DIST, f, 'theme.json'),
    JSON.stringify(theme, null, 2),
  )
}))

// BUILD EXTENSION RUNTIME
await build({
  entry: ['src/index.ts', 'src/browser.ts'],
  format: ['cjs'],
  external: ['vscode'],
  minify: true,
  shims: true,
})
