/**
 * Optimizes SVGs by running them through SVGO + Iconify cleanup
 */

import { readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { flavorEntries } from '@catppuccin/palette'
import { SVG, cleanupSVG, runSVGO } from '@iconify/tools'

Promise.all(flavorEntries.map(async ([flavor]) => {
  const flavorPath = resolve('icons', flavor)
  const svgs = await readdir(flavorPath)
  await Promise.all(svgs.map(async (s) => {
    const svgPath = resolve(flavorPath, s)
    const str = await readFile(svgPath, 'utf8')
    const svg = new SVG(str)
    cleanupSVG(svg)
    runSVGO(svg, { plugins: [
      'cleanupAttrs',
      'cleanupEnableBackground',
      'cleanupIds',
      'cleanupListOfValues',
      'cleanupNumericValues',
      'collapseGroups',
      'convertColors',
      'convertEllipseToCircle',
      'convertShapeToPath',
      'convertStyleToAttrs',
      'convertTransform',
      'inlineStyles',
      'mergePaths',
      'mergeStyles',
      'minifyStyles',
      'moveElemsAttrsToGroup',
      'removeComments',
      'removeDesc',
      'removeDoctype',
      'removeEditorsNSData',
      'removeEmptyAttrs',
      'removeEmptyContainers',
      'removeEmptyText',
      'removeHiddenElems',
      'removeMetadata',
      'removeNonInheritableGroupAttrs',
      'removeRasterImages',
      'removeScriptElement',
      'removeStyleElement',
      'removeTitle',
      'removeUnknownsAndDefaults',
      'removeUnusedNS',
      'removeUselessDefs',
      'removeUselessStrokeAndFill',
      'removeXMLProcInst',
      'sortAttrs',
      'sortDefsChildren',
    ] })
    await writeFile(
      svgPath,
      svg.toPrettyString()
        .replaceAll(/#[A-Fa-f0-9]{6}/g, s => s.toLowerCase()),
    )
  }))
}))
