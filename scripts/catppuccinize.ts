import colorsea from 'colorsea'
import { variants } from '@catppuccin/palette'
import { labelToHex } from '@/palettes'

const mocha = variants.mocha

//* avoid overlay1 being considered in deltaE
const { overlay1: _, ...catppuccinColors } = labelToHex.mocha
const catppuccinPalette = Object.values(catppuccinColors) as string []

function deltaE(c1: string, c2: string) {
  return colorsea(c1).deltaE(colorsea(c2), 'cie2000')
}

function catppuccinizeColor(color: string) {
  switch (color) {
    case '#ffffff': return mocha.text.hex
    case '#808080': return mocha.overlay1.hex
    default: return [...catppuccinPalette].sort(
      (c1, c2) => deltaE(color, c1) - deltaE(color, c2),
    ).at(0)
  }
}

/**
 * Change SVG colors to Catppuccin Mocha palette colors
 * @param svg SVG as string
 */
export function catppuccinizeSvg(svg: string) {
  return svg.replaceAll(/#([a-dA-F0-9]{6})/gi, catppuccinizeColor)
}
