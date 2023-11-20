import { type labels, variants } from '@catppuccin/palette'

export type CattppucinVariant =
  | 'latte'
  | 'mocha'
  | 'aura'
  | 'ayu'
  | 'dracula'
  | 'monokai'
  | 'sequoia'
  | 'dark'

export const catppuccinVariants = [
  'latte',
  'mocha',
  'aura',
  'ayu',
  'dracula',
  'monokai',
  'sequoia',
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

const aura: Partial<Record<CatppuccinColor, string>> = {
  blue: '#82E2FF',
  green: '#61FFCA',
  maroon: '#FF6796',
  mauve: '#A277FF',
  overlay1: '#6D6D6D',
  peach: '#FFCA85',
  pink: '#F694FF',
  red: '#FF6767',
  rosewater: '#FF94DE',
  sapphire: '#67FFF9',
  sky: '#82C8FF',
  teal: '#67FFDB',
  text: '#7F7F7F',
  yellow: '#F9FF85',
}

const ayu: Partial<Record<CatppuccinColor, string>> = {
  blue: '#73B8FF',
  green: '#7FD962',
  maroon: '#F26D78',
  mauve: '#D2A6FF',
  overlay1: '#6C738080',
  peach: '#FF8F40',
  pink: '#F07178',
  red: '#D95757',
  rosewater: '#F07178',
  sapphire: '#95E6CB',
  sky: '#59C2FF',
  teal: '#95E6CB',
  text: '#6C7380E6',
  yellow: '#E6B450',
}

const dracula: Partial<Record<CatppuccinColor, string>> = {
  blue: '#8BE9FD',
  green: '#50FA7B',
  maroon: '#FF5555',
  mauve: '#BD93F9',
  overlay1: '#6272A4',
  peach: '#FFB86C',
  pink: '#FF79C6',
  red: '#FF5555',
  rosewater: '#FF79C6',
  sapphire: '#4DB6AC',
  sky: '#8BE9FD',
  teal: '#4DB6AC',
  text: '#F8F8F2',
  yellow: '#F1FA8C',
}

const monokai: Partial<Record<CatppuccinColor, string>> = {
  blue: '#78DCE8',
  green: '#A9DC76',
  maroon: '#FF61A6',
  mauve: '#AB9DF2',
  overlay1: '#727072',
  peach: '#FC9867',
  pink: '#FF79F1',
  red: '#FF6188',
  rosewater: '#E979FF',
  sapphire: '#6EE6CC',
  sky: '#78C0E8',
  teal: '#5ED7CC',
  text: '#c1c0c0',
  yellow: '#FFD866',
}

const sequoia: Partial<Record<CatppuccinColor, string>> = {
  blue: '#8EB6F5',
  green: '#61C997',
  maroon: '#EE8679',
  mauve: '#C58FFF',
  overlay1: '#575861',
  peach: '#FAA28E',
  pink: '#F58EE0',
  red: '#d97062',
  rosewater: '#F58EE0',
  sapphire: '#7EBFC6',
  sky: '#8EC5F5',
  teal: '#7EBFC6',
  text: '#868690',
  yellow: '#E6DA7E',
}

const dark: Partial<Record<CatppuccinColor, string>> = {
  blue: '#42A0FF',
  green: '#32C06D',
  maroon: '#F96E66',
  mauve: '#A761FF',
  overlay1: '#575758',
  peach: '#FB9D42',
  pink: '#E96FEB',
  red: '#F95148',
  rosewater: '#EE8FF0',
  sapphire: '#0097A7',
  sky: '#66B2FF',
  teal: '#26A69A',
  text: '#757981',
  yellow: '#F9C509',
}

export const varToHex: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.latte[label].hex }), {}),
  mocha: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: variants.mocha[label].hex }), {}),
  aura: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: aura[label] }), {}),
  ayu: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: ayu[label] }), {}),
  dracula: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dracula[label] }), {}),
  monokai: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: monokai[label] }), {}),
  sequoia: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: sequoia[label] }), {}),
  dark: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dark[label] }), {}),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [hex, label])),
  mocha: Object.fromEntries(Object.entries(varToHex.mocha).map(([label, hex]) => [hex, label])),
  aura: Object.fromEntries(Object.entries(varToHex.aura).map(([label, hex]) => [hex, label])),
  ayu: Object.fromEntries(Object.entries(varToHex.ayu).map(([label, hex]) => [hex, label])),
  dracula: Object.fromEntries(Object.entries(varToHex.dracula).map(([label, hex]) => [hex, label])),
  monokai: Object.fromEntries(Object.entries(varToHex.monokai).map(([label, hex]) => [hex, label])),
  sequoia: Object.fromEntries(Object.entries(varToHex.sequoia).map(([label, hex]) => [hex, label])),
  dark: Object.fromEntries(Object.entries(varToHex.dark).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  latte: `\n<style>:root {${Object.entries(varToHex.latte).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  mocha: `\n<style>:root {${Object.entries(varToHex.mocha).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  aura: `\n<style>:root {${Object.entries(varToHex.aura).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  ayu: `\n<style>:root {${Object.entries(varToHex.ayu).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dracula: `\n<style>:root {${Object.entries(varToHex.dracula).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  monokai: `\n<style>:root {${Object.entries(varToHex.monokai).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  sequoia: `\n<style>:root {${Object.entries(varToHex.sequoia).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dark: `\n<style>:root {${Object.entries(varToHex.dark).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
