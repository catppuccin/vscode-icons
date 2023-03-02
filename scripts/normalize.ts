import { type CattppucinVariant, varToHex } from '@/palettes'

/**
 * Change css-var style colors to inline colors
 * @param svg SVG as string
 * @param variant Catppuccin variant to infer colors from
 */
export function normalizeSvg(svg: string, variant: CattppucinVariant) {
  const unstyled = svg.replace(/<style>[\s\S]*<\/style>\n/, '')
  const replaced = unstyled.replaceAll(/var\(--ctp-[a-z0-9]*\w\)/ig, m => varToHex[variant][m.slice(4, -1)])
  return replaced
}
