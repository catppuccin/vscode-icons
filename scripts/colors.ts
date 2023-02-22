import colorsea from 'colorsea'
import { type Labels, type Variants, variants } from '@catppuccin/palette'

export type CatppuccinFlavor = keyof Variants<any>
export const catppuccinFlavors = [
  'latte',
  'frappe',
  'macchiato',
  'mocha',
] satisfies Readonly<CatppuccinFlavor[]>

export type CatppuccinColor = keyof Labels<any, any>
export const catppuccinColors = [
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

const catppuccinPalettes = catppuccinFlavors.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: catppuccinColors.map(
      c => variants[cur][c].hex),
  }), {}) as Variants<string[]>

/**
 * Returns a catppuccinizing function (used as replacer)
 * @param flavor what flavor do you like your colors ?
 */
export const catppuccinize = (flavor: CatppuccinFlavor) =>
  (color: string) =>
    [...catppuccinPalettes[flavor]].sort((c1, c2) =>
      colorsea(color).deltaE(colorsea(c1), 'cie2000')
    - colorsea(color).deltaE(colorsea(c2), 'cie2000'),
    ).at(0)
