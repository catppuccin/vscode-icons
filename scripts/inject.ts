import { cssVars } from '@/palettes'

const vars = {
  '#f5e0dc': '--ctp-rosewater',
  '#f2cdcd': '--ctp-flamingo',
  '#f5c2e7': '--ctp-pink',
  '#cba6f7': '--ctp-mauve',
  '#f38ba8': '--ctp-red',
  '#eba0ac': '--ctp-maroon',
  '#fab387': '--ctp-peach',
  '#f9e2af': '--ctp-yellow',
  '#a6e3a1': '--ctp-green',
  '#94e2d5': '--ctp-teal',
  '#89dceb': '--ctp-sky',
  '#74c7ec': '--ctp-sapphire',
  '#89b4fa': '--ctp-blue',
  '#b4befe': '--ctp-lavender',
  '#cdd6f4': '--ctp-text',
  '#7f849c': '--ctp-overlay1',
}

/**
 * Inject mocha palette as CSS variables and replace found colors in SVG
 * @param svg SVG as string
 */
export function injectPalette(svg: string) {
  const replaced = svg.replaceAll(/#([a-dA-F0-9]{6})/gi, m => `var(${vars[m]})`)
  const injected = replaced.replace(/\n/, `\n  <style>:root ${cssVars.mocha}</style>\n`)
  return injected
}
