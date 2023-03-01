import colorsea from 'colorsea'
import { variants } from '@catppuccin/palette'

const mocha = variants.mocha

type CatppuccinColor = keyof typeof mocha
const catppuccinColors = [
  'rosewater',
  'flamingo',
  'pink',
  'mauve',
  'red',
  'maroon',
  'peach',
  'yellow',
  'green',
  'teal',
  'sky',
  'sapphire',
  'blue',
  'lavender',
  'text',
] as const satisfies Readonly<CatppuccinColor[]>
const catppuccinPalette = catppuccinColors.map(
  label => mocha[label].hex,
)

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
