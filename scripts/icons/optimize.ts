/**
 * Optimizes SVGs by running them through SVGO + Iconify cleanup.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { exit } from 'node:process'
import { cleanupSVG, runSVGO, SVG } from '@iconify/tools'
import { consola } from 'consola'
import { folders } from './utils/palettes'

try {
  consola.info('Optimizing SVG files...')
  Promise.all(
    folders.map(async (flavor) => {
      const flavorPath = resolve('icons', flavor)
      const svgs = await readdir(flavorPath)
      await Promise.all(
        svgs.map(async (s) => {
          const svgPath = resolve(flavorPath, s)
          const str = await readFile(svgPath, 'utf8')
          const svg = new SVG(str)
          cleanupSVG(svg)
          runSVGO(svg, {
            plugins: [
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
            ],
            multipass: true,
          })
          await writeFile(
            svgPath,
            svg
              .toPrettyString()
              .replaceAll(/#[A-F0-9]{6}/gi, s => s.toLowerCase()),
          )
        }),
      )
    }),
  )
  consola.success('Optimized SVG files.')
}
catch (error) {
  consola.error('Optimization failed: ', error)
  exit(1)
}
