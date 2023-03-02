import { cssVarStyleTags, hexToVar } from '@/palettes'

/**
 * Inject mocha palette as CSS variables and replace found colors in SVG
 * @param svg SVG as string
 */
export function injectPalette(svg: string) {
  const replaced = svg.replaceAll(/#([a-dA-F0-9]{6})/gi, m => `var(${hexToVar.mocha[m]})`)
  const injected = replaced.replace(/\n/, cssVarStyleTags.mocha)
  return injected
}
