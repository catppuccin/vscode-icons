import { cp, readdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { flavorEntries } from '@catppuccin/palette'
import { build } from 'tsup'
import { rimraf } from 'rimraf'
import { compileTheme } from '~/utils/themes'

const DIST = 'dist'
const flavors = flavorEntries.map(([f]) => f)

// cleanup
await rimraf(DIST)

// copy icons to dist
await Promise.all(flavors.map(async (f) => {
  await cp(join('icons', f), join(DIST, f, 'icons'), { recursive: true })
}))

// copy css-vars/unflavored icons to dist
await cp(join('icons', 'css-variables'), join(DIST, 'unflavored'), { recursive: true })

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

// build extension runtime
await build({
  entry: ['src/main.ts', 'src/browser.ts'],
  format: ['cjs'],
  external: ['vscode'],
  minify: true,
  shims: true,
})
