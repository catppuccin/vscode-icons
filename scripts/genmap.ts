/* Script to generate the codepoints
 * and write to mapping.json. This should
 * only BE RUN ONCE!
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { consola } from 'consola'

const SVG_FOLDER_PATH = './icons/mocha'
const OUTPUT_FILE = 'mapping.json'
const START_VALUE = 5000

function getSvgFilesFromDirectory(directoryPath: string): string[] {
  try {
    const files = fs.readdirSync(directoryPath)

    return files.filter(
      file =>
        file.toLowerCase().endsWith('.svg')
        && fs.statSync(path.join(directoryPath, file)).isFile(),
    )
  }
  catch (error) {
    consola.error(`Error reading directory: ${error}`)
    return []
  }
}

function filenameToKey(filename: string): string {
  return filename.replace('.svg', '')
}

function generateMapping(): void {
  consola.info(`Reading SVG files from: ${SVG_FOLDER_PATH}`)

  const svgFiles = getSvgFilesFromDirectory(SVG_FOLDER_PATH)

  if (svgFiles.length === 0) {
    consola.error('No SVG files found in the specified directory.')
    return
  }

  svgFiles.sort((a, b) => a.localeCompare(b))

  consola.info(`Found ${svgFiles.length} SVG files.`)

  const mapping: Record<string, number> = {}
  let currentValue = START_VALUE

  svgFiles.forEach((file) => {
    const key = filenameToKey(file)
    mapping[key] = currentValue++
  })

  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mapping, null, 2))
    consola.success(`Mapping successfully written to ${OUTPUT_FILE}`)
    consola.success(
      `Created ${Object.keys(mapping).length} mappings starting from ${START_VALUE}`,
    )

    const jsonContent = fs.readFileSync(OUTPUT_FILE, 'utf8')
    fs.writeFileSync(OUTPUT_FILE, jsonContent)
  }
  catch (error) {
    consola.error(`Error writing mapping file: ${error}`)
  }
}

generateMapping()
