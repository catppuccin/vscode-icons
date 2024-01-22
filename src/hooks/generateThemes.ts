import { join } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import { flavorEntries } from '@catppuccin/palette'

const root = join(__dirname, '../..')
const flavors = flavorEntries.map(([f]) => f)

async function generateThemes() {
  await mkdir(join(root, 'themes'), { recursive: true })

  await Promise.all(flavors.map(async (flavor) => {
    await writeFile(
      join(root, `themes/${flavor}.json`),
      JSON.stringify({}, null, 2),
    )
  }))
}

export default generateThemes
