import { readFile, readdir, writeFile } from 'fs/promises'
import { ensureDir, remove } from 'fs-extra'
import { join, resolve } from 'pathe'

import { optimizeSvg, replaceColors } from './svg'
import { catppuccinFlavors, catppuccinize } from './colors'

const DIST = resolve('themes')
const ICONS_SRC = resolve(join('src', 'icons'))

// ? create flavour icon dirs
await remove(DIST)
await Promise.all(catppuccinFlavors.map(
  async f => await ensureDir(join(DIST, f, 'icons')),
))

// ? create catppuccinized icons
const sourceIcons = await readdir(ICONS_SRC)
sourceIcons.map(async (i) => {
  const svg = await readFile(join(ICONS_SRC, i), 'utf8')
  const optimized = optimizeSvg(svg)
  await Promise.all(catppuccinFlavors.map(async (f) => {
    const catppuccinized = replaceColors(optimized, catppuccinize(f))
    await writeFile(join(DIST, f, 'icons', i), catppuccinized)
  }))
})
