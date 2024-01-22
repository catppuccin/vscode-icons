import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { AccentName, FlavorName, MonochromaticName } from '@catppuccin/palette'
import { flavorEntries } from '@catppuccin/palette'
import { SVG, parseColors } from '@iconify/tools'

type ColorName = AccentName | Extract<MonochromaticName, 'text' | 'overlay1'>
const palettes = flavorEntries.reduce((acc, [name, flavor]) => ({
  ...acc,
  [name]: flavor.colorEntries
    .filter(([color, { accent }]) => accent || ['text', 'overlay1'].includes(color))
    .map(([color, { hex }]) => [color, hex]),
}), {} as Record<FlavorName, Array<[ColorName, string]>>)
const flavors = flavorEntries.map(([f]) => f)

for (const origin of flavors) {
  const originPath = resolve('icons', origin)
  const originSvgs = readdirSync(originPath)

  for (const dest of flavors.filter(f => f !== origin)) {
    const destPath = resolve('icons', dest)
    const destSvgs = readdirSync(destPath)
    originSvgs.filter(s => !destSvgs.includes(s)).forEach(async (i) => {
      const svg = new SVG(readFileSync(resolve(originPath, i), 'utf8'))
      parseColors(svg, {
        callback(attr, color) {
          if (attr === 'stroke') {
            const newColorName = palettes[origin].find(v => v[1] === color.toLowerCase())?.[0]
            if (!newColorName)
              throw new Error(`Color '${color}' found in '${i}' is not in ${origin} palette.`)
            const newColor = palettes[dest].find(v => v[0] === newColorName)?.[1]
            return newColor
          }
          return color
        },
      })
      writeFileSync(resolve(destPath, i), svg.toPrettyString())
    })
  }
}
