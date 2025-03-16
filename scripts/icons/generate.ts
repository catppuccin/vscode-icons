/**
 * Generates missing icons from existing ones from other palettes.
 * If an icon exists in `icons/latte`, it will create its counterparts for other palettes.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { exit } from 'node:process'
import { parseColors, SVG } from '@iconify/tools'
import { consola } from 'consola'
import { folders, palettes } from '~/utils/palettes'

try {
  consola.info('Generating icons...')
  let generated = 0
  for (const origin of folders) {
    const originPath = resolve('icons', origin)
    const originSvgs = await readdir(originPath)

    for (const dest of folders.filter(f => f !== origin)) {
      const destPath = resolve('icons', dest)
      const destSvgs = readdirSync(destPath)
      originSvgs.filter(s => !destSvgs.includes(s)).forEach((i) => {
        const svg = new SVG(readFileSync(resolve(originPath, i), 'utf8'))
        parseColors(svg, {
          callback(attr, color) {
            if ((attr === 'stroke' || attr === 'fill') && color !== 'none') {
              const newColorName = palettes[origin].find(v => v[1] === color.toLowerCase())?.[0]
              const newColor = palettes[dest].find(v => v[0] === newColorName)?.[1]
              if (!newColor)
                throw new Error(`Color '${color}' found in '${i}' is not in ${origin} palette.`)
              return newColor
            }
            return color
          },
        })
        writeFileSync(resolve(destPath, i), svg.toPrettyString())
        generated++
      })
    }
  }
  consola.success(`Generated ${generated} icons.`)
}
catch (error) {
  consola.error('Generation failed: ', error)
  exit(1)
}
