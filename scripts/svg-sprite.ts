import fs from 'node:fs'
import path from 'node:path'
import { consola } from 'consola'
import SVGSpriter from 'svg-sprite'
import mapping from '../mapping.json' assert { type: 'json' }

const flavors = ['mocha', 'macchiato', 'frappe', 'latte']
const outDir = 'dist'
const outFile = 'catppuccin-code-icons.svg'

const mappingEntries = Object.entries(mapping)

function findNames(symbol: number) {
  return mappingEntries.filter(([_, s]) => s === symbol).map(([name]) => name)
}

flavors.forEach((flavor) => {
  consola.info(`Processing flavor: ${flavor}`)

  const config = {
    mode: {
      symbol: {
        dest: path.join(outDir, flavor),
        sprite: outFile,
      },
    },
  }

  const spriter = new SVGSpriter(config)

  mappingEntries.forEach(([mappedName, symbol]) => {
    const file = path.resolve(`./icons/${flavor}/${mappedName}.svg`)

    if (fs.existsSync(file)) {
      for (const name of findNames(symbol)) {
        spriter.add(
          path.resolve(`./icons/${flavor}/${name}.svg`),
          `${name}.svg`,
          fs.readFileSync(file, 'utf-8'),
        )
      }
    }
  })

  spriter.compile((error, result) => {
    if (error) {
      consola.info(`Error compiling sprite for ${flavor}:`, error)
      return
    }

    const outputDir = path.resolve(path.join(outDir, flavor))
    fs.mkdirSync(outputDir, { recursive: true })

    const outputPath = result.symbol.sprite.path
    fs.writeFileSync(outputPath, result.symbol.sprite.contents)
    consola.success(`Generated: ${outputPath}`)
  })
})
