import { optimize } from 'svgo'

/**
 * Optimizes an SVG
 * @param svg SVG as string
 */
export function optimizeSvg(svg: string) {
  return optimize(svg, {
    floatPrecision: 2,
    plugins: [
      'preset-default',
    ],
  }).data
}
