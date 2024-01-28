/**
 * Things related to the catppuccin palette
 */
import type { AccentName, MonochromaticName } from '@catppuccin/palette'
import { flavorEntries, flavors } from '@catppuccin/palette'

export const FLAVORS = ['frappe', 'latte', 'macchiato', 'mocha', 'css-variables'] as const
export type Flavor = typeof FLAVORS[number]

type ColorName = AccentName | Extract<MonochromaticName, 'text' | 'overlay1'>

export const palettes = {
  ...flavorEntries.reduce((acc, [flavorName, flavor]) => ({
    ...acc,
    [flavorName]: flavor.colorEntries
      .filter(([color, { accent }]) => accent || ['text', 'overlay1'].includes(color))
      .map(([color, { hex }]) => [color, hex]),
  }), {} as Record<Flavor, Array<[ColorName, string]>>),
  'css-variables': flavors.latte.colorEntries
    .filter(([color, { accent }]) => accent || ['text', 'overlay1'].includes(color))
    .map(([color]) => ([color, `var(--vscode-ctp-${color})`])) as Array<[ColorName, string]>,
}
