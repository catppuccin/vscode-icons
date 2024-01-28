import type { ExtensionContext } from 'vscode'
import { window } from 'vscode'
import { flavorEntries } from '@catppuccin/palette'
import { writeJsonFile } from './interactions'
import { getConfig } from '~/hooks/configuration'
import { getIconDefinitions } from '~/hooks/iconDefinitions'
import { compileTheme } from '~/utils/themes'
import { getThemePaths } from '~/hooks/paths'

// TODO generate icon definitions with hash to bust cache

export async function updateThemes(context: ExtensionContext) {
  const iconDefinitions = await getIconDefinitions(context)
  const paths = getThemePaths(context)
  const config = getConfig()
  const theme = compileTheme(config, iconDefinitions)
  const flavors = flavorEntries.map(([f]) => f)

  await Promise.all(flavors.map(async (flavor) => {
    await writeJsonFile(paths[flavor].theme, theme)
  })).catch((e: Error) => {
    window.showErrorMessage(`Failed to save re-compiled theme: \n${e.message}`)
  })
}
