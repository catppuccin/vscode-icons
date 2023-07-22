import { type labels, variants } from '@catppuccin/palette'

export type CattppucinVariant = 'latte' | 'frappe' | 'macchiato' | 'mocha' | 'dark'

export const catppuccinVariants = [
  'latte',
  'frappe',
  'macchiato',
  'mocha',
  'dark',
] as const satisfies Readonly<CattppucinVariant[]>

export type CatppuccinColor = keyof typeof labels

export const catppuccinColors = [
  'blue',
  'flamingo',
  'green',
  'lavender',
  'mantle',
  'maroon',
  'mauve',
  'overlay1',
  'peach',
  'pink',
  'red',
  'rosewater',
  'sapphire',
  'sky',
  'teal',
  'text',
  'yellow',
] as const satisfies Readonly<CatppuccinColor[]>

const dark: Partial<Record<CatppuccinColor, string>> = {
  blue: '#1e66f5',
  flamingo: '#dd7878',
  green: '#40a02b',
  lavender: '#7287fd',
  mantle: '#e6e9ef',
  maroon: '#e64553',
  mauve: '#8839ef',
  overlay1: '#4c4f69',
  peach: '#fe640b',
  pink: '#ea76cb',
  red: '#d20f39',
  rosewater: '#dc8a78',
  sapphire: '#209fb5',
  sky: '#04a5e5',
  teal: '#179299',
  text: '#8c8fa1',
  yellow: '#df8e1d',
}

export const varToHex: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.latte[label].hex }), {}),
  frappe: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.frappe[label].hex }), {}),
  macchiato: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.macchiato[label].hex }), {}),
  mocha: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.mocha[label].hex }), {}),
  dark: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dark[label] }), {}),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [hex, label])),
  frappe: Object.fromEntries(Object.entries(varToHex.frappe).map(([label, hex]) => [hex, label])),
  macchiato: Object.fromEntries(Object.entries(varToHex.macchiato).map(([label, hex]) => [hex, label])),
  mocha: Object.fromEntries(Object.entries(varToHex.mocha).map(([label, hex]) => [hex, label])),
  dark: Object.fromEntries(Object.entries(varToHex.dark).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  latte: `\n<style>:root {${Object.entries(varToHex.latte).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  frappe: `\n<style>:root {${Object.entries(varToHex.frappe).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  macchiato: `\n<style>:root {${Object.entries(varToHex.macchiato).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  mocha: `\n<style>:root {${Object.entries(varToHex.mocha).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dark: `\n<style>:root {${Object.entries(varToHex.dark).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
