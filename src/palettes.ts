import { type labels, variants } from '@catppuccin/palette'

export type CattppucinVariant = 'latte' | 'mocha' | 'ayu' | 'dracula' | 'sequoia' | 'dark'

export const catppuccinVariants = [
  'latte',
  'mocha',
  'ayu',
  'dracula',
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
  overlay1: '#5E627C',
  peach: '#FFB86C',
  pink: '#FF79C6',
  red: '#FF5555',
  rosewater: '#FF79C6',
  sapphire: '#4DB6AC',
  sky: '#8BE9FD',
  teal: '#4DB6AC',
  text: '#6272A4',
  yellow: '#F1FA8C',
}

const sequoia: Partial<Record<CatppuccinColor, string>> = {
  blue: '#8EB6F5',
  green: '#5FD89D',
  maroon: '#EE8679',
  mauve: '#C58FFF',
  overlay1: '#575861',
  peach: '#FF9B85',
  pink: '#F58EE0',
  red: '#FF6B6C',
  rosewater: '#F58EE0',
  sapphire: '#00C7BF',
  sky: '#55BDFF',
  teal: '#00C7BF',
  text: '#868690',
  yellow: '#FFF08F',
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
  ayu: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: ayu[label] }), {}),
  dracula: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dracula[label] }), {}),
  sequoia: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: sequoia[label] }), {}),
  dark: catppuccinColors.reduce((acc, label) => ({ ...acc, [`--ctp-${label}`]: dark[label] }), {}),
}

export const hexToVar: Record<CattppucinVariant, Partial<Record<string, string>>> = {
  latte: Object.fromEntries(Object.entries(varToHex.latte).map(([label, hex]) => [hex, label])),
  mocha: Object.fromEntries(Object.entries(varToHex.mocha).map(([label, hex]) => [hex, label])),
  ayu: Object.fromEntries(Object.entries(varToHex.ayu).map(([label, hex]) => [hex, label])),
  dracula: Object.fromEntries(Object.entries(varToHex.dracula).map(([label, hex]) => [hex, label])),
  sequoia: Object.fromEntries(Object.entries(varToHex.sequoia).map(([label, hex]) => [hex, label])),
  dark: Object.fromEntries(Object.entries(varToHex.dark).map(([label, hex]) => [hex, label])),
}

export const cssVarStyleTags: Record<CattppucinVariant, string> = {
  latte: `\n<style>:root {${Object.entries(varToHex.latte).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  mocha: `\n<style>:root {${Object.entries(varToHex.mocha).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  ayu: `\n<style>:root {${Object.entries(varToHex.ayu).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dracula: `\n<style>:root {${Object.entries(varToHex.dracula).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  sequoia: `\n<style>:root {${Object.entries(varToHex.sequoia).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
  dark: `\n<style>:root {${Object.entries(varToHex.dark).reduce((str, [label, value]) => `${str}${label}: ${value};`, '')}}</style>\n`,
}
