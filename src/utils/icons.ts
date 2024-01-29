import type { ColorName, FlavorName } from '@catppuccin/palette'
import { flavors } from '@catppuccin/palette'
import defu from 'defu'
import { defaultConfig } from '~/defaults'
import type { IconsConfig } from '~/types'

/**
 * Create icon with Text color from `flavor` only
 * @param svg unflavored (css-variables) icon svg
 * @param flavor flavor to pick Text color from
 * @returns flavored monochrome icon svg
 */
export function monochromeIcon(svg: string, flavor: FlavorName) {
  return svg.replaceAll(
    /var\(--vscode-ctp-\w+\)/g,
    flavors[flavor].colors.text.hex,
  )
}

/**
 * Create icon with default colors from `flavor`
 * @param svg unflavored (css-variables) icon svg
 * @param flavor flavor to pick palette from
 * @returns flavored default icon svg
 */
export function defaultIcon(svg: string, flavor: FlavorName) {
  return svg.replaceAll(
    /var\(--vscode-ctp-\w+\)/g,
    v => flavors[flavor].colors[v.slice(17, -1) as ColorName].hex,
  )
}

/**
 * Create icon given IconsConfig
 * @param svg unflavored (css-variables) icon svg
 * @param flavor flavor to pick palette from
 * @param config config to pick options from
 * @returns flavored default icon svg
 */
export function compileIcon(svg: string, flavor: FlavorName, config: Partial<IconsConfig>) {
  const { monochrome } = defu(config, {
    monochrome: defaultConfig.monochrome,
  })

  return monochrome ? monochromeIcon(svg, flavor) : defaultIcon(svg, flavor)
}

/**
 * Generate hash based on options, used to bust VSC cache
 * @param config config to pick options from
 * @returns hash
 */
export function iconHash(config: Partial<IconsConfig>) {
  const hash = []
  if (config.monochrome)
    hash.push('m')
  return hash.join('')
}

/**
 * Adds hash to an SVG path
 * @param svgPath path string `<basename>.svg`
 * @param hash hash to apped to path
 * @returns `<basename><hash>.svg`
 */
export function hashedSvgPath(svgPath: string, hash: string) {
  return `${svgPath.slice(0, -4)}${hash}.svg`
}
