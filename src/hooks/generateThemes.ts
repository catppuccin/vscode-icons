import { basename, join } from 'node:path'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { flavorEntries } from '@catppuccin/palette'

import { base } from '../defaults/base'

const root = join(__dirname, '../..')
const flavors = flavorEntries.map(([f]) => f)

async function generateThemes() {
  await mkdir(join(root, 'themes'), { recursive: true })

  await Promise.all(flavors.map(async (flavor) => {
    const icons = await readdir(join(root, `icons/${flavor}`))

    const iconDefinitions = icons.reduce((d, i) => ({
      ...d,
      [basename(i, '.svg')]: {
        iconPath: `../icons/${flavor}/${i}`,
      },
    }), {})

    const theme = {
      ...base,
      iconDefinitions,
    }

    await writeFile(
      join(root, `themes/${flavor}.json`),
      JSON.stringify(theme, null, 2),
    )
  }))
}

export default generateThemes
