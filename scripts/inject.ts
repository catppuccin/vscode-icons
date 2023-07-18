import { cssVarStyleTags, hexToVar } from '@/palettes'

/**
 * Inject latte palette as CSS variables and replace found colors in SVG
 * @param svg SVG as string
 */
export function injectPalette(svg: string) {
  const replaced = svg.replaceAll(/#([a-dA-F0-9]{6})/gi, m => `var(${hexToVar.latte[m]})`)
  const injected = replaced.replace(/\n/, cssVarStyleTags.latte)
  return injected
}
