import { build } from 'tsup'
import { getFlag } from 'type-flag'

import generateThemes from '../src/hooks/generateThemes'

const dev = getFlag('--dev', Boolean) ?? false

;(async () => {
  await generateThemes()
  await build({
    entry: ['src/index.ts'],
    format: ['cjs'],
    external: ['vscode'],
    minify: !dev,
    sourcemap: dev,
    watch: dev,
    dts: false,
    clean: true,
    shims: false,
  })
})()
