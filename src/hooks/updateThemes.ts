import { window } from 'vscode'
import { flavorEntries } from '@catppuccin/palette'
import type { IconDefinitions, Theme, ThemePaths } from '~/types'
import { createVscTheme } from '~/hooks/generateTheme'
import { promptToReload, writeFile } from '~/utils/vscode'

export async function updateThemes(theme: Theme, paths: ThemePaths, iconDefinitions: IconDefinitions) {
  const flavors = flavorEntries.map(([f]) => f)

  return Promise.all(flavors.map(async flavor =>
    writeFile(
      paths[flavor].theme,
      createVscTheme(theme, iconDefinitions),
    ),
  )).then(async () => {
    await promptToReload()
  }).catch((error: Error) => {
    window.showErrorMessage(
      `Failed to save re-compiled theme: \n${error.message}`,
    )
  })
}
