import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { type FlavorName, flavorEntries, flavors } from '@catppuccin/palette'
import { SVG, cleanupSVG, parseColors, runSVGO } from '@iconify/tools'
import { temporaryDirectoryTask } from 'tempy'
import { cli } from 'cleye'
import { consola } from 'consola'
import { launch } from 'puppeteer'
import { palettes } from '~/utils/palettes'

/**
 * Optimizes SVGs by running them through SVGO + Iconify cleanup.
 */
async function optimizeIcons() {
  try {
    consola.info('Optimizing SVG files...')
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
    consola.success('Optimized SVG files.')
  }
  catch (error) {
    consola.error('Optimization failed: ', error)
  }
}

/**
 * Generates missing icons from existing ones from other palettes.
 * If an icon exists in `icons/latte`, it will create its counterparts for other palettes.
 */
function generateIcons() {
  const flavors = [
    'css-variables',
    'frappe',
    'latte',
    'macchiato',
    'mocha',
  ] satisfies Array<keyof typeof palettes>

  try {
    consola.info('Generating icons...')
    let generated = 0
    for (const origin of flavors) {
      const originPath = resolve('icons', origin)
      const originSvgs = readdirSync(originPath)

      for (const dest of flavors.filter(f => f !== origin)) {
        const destPath = resolve('icons', dest)
        const destSvgs = readdirSync(destPath)
        originSvgs.filter(s => !destSvgs.includes(s)).forEach(async (i) => {
          const svg = new SVG(readFileSync(resolve(originPath, i), 'utf8'))
          parseColors(svg, {
            callback(attr, color) {
              if (attr === 'stroke') {
                const newColorName = palettes[origin].find(v => v[1] === color.toLowerCase())?.[0]
                const newColor = palettes[dest].find(v => v[0] === newColorName)?.[1]
                if (!newColor)
                  throw new Error(`Color '${color}' found in '${i}' is not in ${origin} palette.`)
                return newColor
              }
              return color
            },
          })
          writeFileSync(resolve(destPath, i), svg.toPrettyString())
          generated++
        })
      }
    }
    consola.success(`Generated ${generated} icons.`)
  }
  catch (error) {
    consola.error('Generation failed: ', error)
  }
}

/**
 * Generates previews (.webp) for all flavors.
 */
async function previewIcons() {
  try {
    consola.info('Generating previews...')

    const allIcons = await readdir('icons/latte')
    const fileIcons = allIcons.filter(i => !i.startsWith('folder_') && !i.startsWith('_'))
    const folderIcons = allIcons.filter(i => i.startsWith('folder_') && !i.endsWith('_open.svg'))

    function iconPath(icon: string, flavor: FlavorName) {
      return `${resolve(join('icons', flavor, icon))}`
    }

    function generateHtml(flavor: FlavorName) {
      return `
      <html>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space%20Mono">
          <style>
            body {
              font-family: Space Mono, monospace;
              font-size: 20px;
              margin: 0;
            }
            .container {
              color: ${flavors[flavor].colors.text.hex};
              background-color: ${flavors[flavor].colors.mantle.hex};
              width: 1500px;
              display: flex;
              flex-direction: column;
              gap: 50px;
              padding: 30px;
              border-radius: 30px;
            }
            .icon-block {
              display: inline-flex;
              align-items: center;
              gap: 10px;
            }
            .icon {
              width: 32px;
              height: 32px;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              gap: 20px;
            }
            .folder-grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              gap: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="grid">
              ${fileIcons.map(i => `
                <div class="icon-block">
                  <img class="icon" src="${iconPath(i, flavor)}">
                  ${i.slice(0, -4)}
                </div>
              `).join('\n')}
            </div>
            <div class="folder-grid">
              ${folderIcons.map(i => `
                <div class="icon-block">
                  <img class="icon" src="${iconPath(i, flavor)}">
                  ${i.slice(0, -4)}
                </div>
              `).join('\n')}
            </div>
          </div>
        </body>
      </html>
    `
    }

    await temporaryDirectoryTask(async (tmp) => {
      await Promise.all(flavorEntries.map(async ([flavor]) => {
        const htmlPath = join(tmp, `${flavor}.html`)
        const screenshotPath = join('assets', `${flavor}.webp`)
        await writeFile(htmlPath, generateHtml(flavor))
        const browser = await launch()
        const page = await browser.newPage()
        await page.goto(join('file:', htmlPath))
        await page.screenshot({
          type: 'webp',
          path: screenshotPath,
          fullPage: true,
          omitBackground: true,
        })
        await browser.close()
      }))
    })

    consola.success('Previews generated.')
  }
  catch (error) {
    consola.error('Preview generation failed: ', error)
  }
}

const argv = cli({
  flags: {
    optimize: {
      alias: 'o',
      type: Boolean,
      default: false,
      description: 'Run SVGO + Iconify optimization',
    },
    generate: {
      alias: 'g',
      type: Boolean,
      default: false,
      description: 'Generate missing icons from existing ones from other palettes',
    },
    preview: {
      alias: 'p',
      type: Boolean,
      default: false,
      description: 'Generate previews for all flavors',
    },
    all: {
      alias: 'a',
      type: Boolean,
      default: false,
      description: 'Run optimize + generate + preview',
    },
  },
})

if (!argv.flags.all && !argv.flags.optimize && !argv.flags.generate && !argv.flags.preview)
  consola.warn('No flag passed, nothing was done. Run with `--help` to get flag info.')

if (argv.flags.all || argv.flags.optimize)
  await optimizeIcons()

if (argv.flags.all || argv.flags.generate)
  generateIcons()

if (argv.flags.all || argv.flags.preview)
  await previewIcons()
