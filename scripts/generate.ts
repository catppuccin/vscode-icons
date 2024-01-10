import { readdir, writeFile, readFile } from "node:fs/promises"
import { resolve } from 'node:path'

import type { FlavorName, AccentName, MonochromaticName } from "@catppuccin/palette"
import { flavorEntries } from '@catppuccin/palette'
import { SVG, parseColors } from "@iconify/tools"

type ColorName = AccentName | Extract<MonochromaticName, 'text' | 'overlay1'>
const palettes = flavorEntries.reduce((acc, [name, flavor]) => ({
  ...acc,
  [name]: flavor.colorEntries
    .filter(([color, { accent }]) => accent || ['text', 'overlay1'].includes(color))
    .map(([color, { hex }]) => [color, hex])
}), {} as Record<FlavorName, Array<[ColorName ,string]>>)

const flavors = flavorEntries.map(([f]) => f)

for(const origin of flavors) {
  const originPath = resolve('icons', origin)
  const originSvgs = await readdir(originPath)

  for (const dest of flavors.filter(f => f !== origin)) {
    const destPath = resolve('icons', dest)
    const destSvgs = await readdir(destPath)
    originSvgs.filter(s => !destSvgs.includes(s)).forEach(async i => {
      const svg = new SVG(await readFile(resolve(originPath, i), 'utf8'))
      parseColors(svg, {
        callback(attr, color) {
          if (attr === "stroke") {
            const newColorName = palettes[origin].find(v => v[1] === color)?.[0]
            const newColor = palettes[dest].find(v => v[0] === newColorName)?.[1]
            return newColor
          }
          return color
        }
      })
      await writeFile(resolve(destPath, i), svg.toPrettyString())
    })
  }
}
