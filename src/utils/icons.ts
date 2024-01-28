import type { ColorName, FlavorName } from '@catppuccin/palette'
import { flavors } from '@catppuccin/palette'
import defu from 'defu'
import { defaultConfig } from '~/defaults'
import type { IconsConfig } from '~/types'

/**
 * Changes colors from css-vars to palette Text
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

export function defaultIcon(svg: string, flavor: FlavorName) {
  return svg.replaceAll(
    /var\(--vscode-ctp-\w+\)/g,
    v => flavors[flavor].colors[v.slice(17, -1) as ColorName].hex,
  )
}

export function compileIcon(svg: string, flavor: FlavorName, config: Partial<IconsConfig>) {
  const { monochrome } = defu(config, {
    monochrome: defaultConfig.monochrome,
  })

  return monochrome ? monochromeIcon(svg, flavor) : defaultIcon(svg, flavor)
}
