import { readFile, readdir, writeFile } from 'node:fs/promises'
import { parseArgs } from 'util'
import consola from 'consola'
import { ensureDir } from 'fs-extra'
import { join, resolve } from 'pathe'

import { catppuccinizeSvg } from './catppuccinize'
import { optimizeSvg } from './optimize'
import { injectPalette } from './inject'

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    all: {
      type: 'boolean',
      short: 'a',
    },
    new: {
      type: 'boolean',
      short: 'n',
    },
  },
})

if (!positionals.length && !values.all && !values.new) {
  consola.error('Missing icon name. Specify what icon(s) to build.')
  process.exit()
}

if (values.all)
  consola.info('Building all icons from `src/icons`...')

const SOURCE = resolve(join('src', 'icons'))
const DEST = resolve('icons')

await ensureDir(DEST)

const existing = await readdir(DEST)

const icons = values.all
  ? await readdir(SOURCE)
  : values.new
    ? (await readdir(SOURCE)).filter(x => !existing.includes(x))
    : positionals.map(p => `${p}.svg`)

await Promise.all(icons.map(async (icon) => {
  const svg = await readFile(resolve(join(SOURCE, icon)), 'utf8')
  const catppuccinized = catppuccinizeSvg(svg)
  const optimized = optimizeSvg(catppuccinized)
  const injected = injectPalette(optimized)
  await writeFile(join(DEST, icon), injected)
}))

consola.success(`Done! Successfully built ${icons.length} icon(s).`)
