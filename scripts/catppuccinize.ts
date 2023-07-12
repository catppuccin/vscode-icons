function catppuccinizeColor(color: string) {
  // Follow palette no need convert
  return color.toLowerCase()
}

/**
 * Change SVG colors to Catppuccin Latte palette colors
 * @param svg SVG as string
 */
export function catppuccinizeSvg(svg: string) {
  return svg.replaceAll(/#([a-dA-F0-9]{6})/gi, catppuccinizeColor)
}
