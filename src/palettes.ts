import { type labels, variants } from '@catppuccin/palette'

export type CattppucinVariant = keyof typeof variants
export const catppuccinVariants = [
  'latte',
  'frappe',
  'macchiato',
  'mocha',
] as const satisfies Readonly<CattppucinVariant[]>
export type CatppuccinColor = keyof typeof labels
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
  'overlay1',
] as const satisfies Readonly<CatppuccinColor[]>

export const varToHex: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.latte[label].hex }), {}),
  frappe: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.frappe[label].hex }), {}),
  macchiato: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.macchiato[label].hex }), {}),
  mocha: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.mocha[label].hex }), {}),
}

export const labelToHex: Record<CattppucinVariant, Partial<Record<CatppuccinColor, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [label.slice(6), hex])),
  frappe: Object.fromEntries(Object.entries(varToHex.frappe).map(([label, hex]) => [label.slice(6), hex])),
  macchiato: Object.fromEntries(Object.entries(varToHex.macchiato).map(([label, hex]) => [label.slice(6), hex])),
  mocha: Object.fromEntries(Object.entries(varToHex.mocha).map(([label, hex]) => [label.slice(6), hex])),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [hex, label])),
  frappe: Object.fromEntries(Object.entries(varToHex.frappe).map(([label, hex]) => [hex, label])),
  macchiato: Object.fromEntries(Object.entries(varToHex.macchiato).map(([label, hex]) => [hex, label])),
  mocha: Object.fromEntries(Object.entries(varToHex.mocha).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  latte: `\n<style>:root {${Object.entries(varToHex.latte).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  frappe: `\n<style>:root {${Object.entries(varToHex.frappe).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  macchiato: `\n<style>:root {${Object.entries(varToHex.macchiato).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  mocha: `\n<style>:root {${Object.entries(varToHex.mocha).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
