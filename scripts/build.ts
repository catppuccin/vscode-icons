import type { OtherAssetType } from '@twbs/fantasticon'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { FontAssetType, generateFonts } from '@twbs/fantasticon'
import { consola } from 'consola'
import { execa } from 'execa'
import packageJson from 'package.json' assert { type: 'json' }
import SVGSpriter from 'svg-sprite'
import codepoints from '../mapping.json'
import { folders } from './icons/utils/palettes'

const outDir = 'dist'
const outFile = 'catppuccin-code-icons.svg'

const mappingEntries = Object.entries(codepoints)

function findNames(symbol: number) {
  return mappingEntries.filter(([_, s]) => s === symbol).map(([name]) => name)
}

function opts(flavor: string) {
  return {
    name: `catppuccin-code-icons`,
    prefix: `catppuccin-${flavor}`,
    codepoints,
    inputDir: `./icons/${flavor}`,
    outputDir: `./dist/${flavor}`,
    fontTypes: [FontAssetType.TTF, FontAssetType.WOFF, FontAssetType.WOFF2],
    normalize: true,
    assetTypes: ['css', 'html'] as OtherAssetType[],
    formatOptions: {
      ttf: {
        url: packageJson.repository.url,
        description: packageJson.fontDescription,
        version: packageJson.fontVersion,
      },
    },
  }
}

// Generate fonts for each flavor in the folders array
async function generateAllFonts() {
  for (const flavor of folders) {
    consola.info(`Generating fonts for ${flavor} flavor...`)
    await generateFonts(opts(flavor))
    await execa`pnpx woff2otf dist/${flavor}/catppuccin-code-icons.woff dist/${flavor}/catppuccin-code-icons.otf`

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
    })

    consola.success(`Generated fonts for ${flavor} flavor.`)
  }
}

// Call the function to generate all fonts
generateAllFonts().catch((error) => {
  consola.error('Error generating fonts:', error)
  process.exit(1)
})
