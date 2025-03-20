import process from 'node:process'
import { consola } from 'consola'
import { generateFonts } from '@twbs/fantasticon'
import packageJson from 'package.json' assert { type: 'json' }
import codepoints from '../mapping.json'
import { folders } from './icons/utils/palettes'

function opts(flavor: string) {
  return {
    name: `catppuccin-code-icons`,
    prefix: `catppuccin-${flavor}`,
    codepoints,
    inputDir: `./icons/${flavor}`,
    outputDir: `./dist/${flavor}`,
    fontTypes: ['ttf', 'woff', 'woff2'],
    normalize: true,
    assetTypes: ['css', 'html'],
    formatOptions: {
      ttf: {
        url: packageJson.repository.url,
        description: packageJson.description,
        version: packageJson.fontVersion,
      },
    },
  }
}

// Generate fonts for each flavor in the folders array
async function generateAllFonts() {
  for (const flavor of folders) {
    consola.info(`Generating fonts for ${flavor} flavor...`)
    /* eslint-disable-next-line ts/ban-ts-comment */
    // @ts-ignore
    await generateFonts(opts(flavor))
    consola.success(`Generated fonts for ${flavor} flavor.`)
  }
}

// Call the function to generate all fonts
generateAllFonts().catch((error) => {
  consola.error('Error generating fonts:', error)
  process.exit(1)
})
