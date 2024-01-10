import { readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { flavorEntries } from '@catppuccin/palette'
import { SVG, cleanupSVG, runSVGO } from '@iconify/tools'

await Promise.all(flavorEntries.map(async ([flavor]) => {
  const flavorPath = resolve('icons', flavor)
  const svgs = await readdir(flavorPath)
  await Promise.all(svgs.map(async s => {
    const svgPath = resolve(flavorPath, s)
    const str = await readFile(svgPath, 'utf8')
    const svg = new SVG(str)
    cleanupSVG(svg)
    runSVGO(svg)
    await writeFile(svgPath, svg.toPrettyString())
  }))
}))
