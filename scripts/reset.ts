import fs from 'node:fs'
import { consola } from 'consola'
import { rimraf } from 'rimraf'

const outputDirectory = 'dist'

rimraf(outputDirectory).then(() => {
  consola.success(`Deleted "${outputDirectory}" folder`)

  fs.mkdirSync(outputDirectory)
  fs.mkdirSync(`${outputDirectory}/mocha`)
  fs.mkdirSync(`${outputDirectory}/macchiato`)
  fs.mkdirSync(`${outputDirectory}/frappe`)
  fs.mkdirSync(`${outputDirectory}/latte`)
  fs.mkdirSync(`${outputDirectory}/css-variables`)

  consola.success(`Created "${outputDirectory}" folder`)
})
