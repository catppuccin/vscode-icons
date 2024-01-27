import { ConfigurationTarget, type ExtensionContext, commands, workspace } from 'vscode'
import { iconDefinitionsPath, themePaths } from './utils/paths'
import type { IconDefinitions } from './types'
import { getConfiguration, isFreshInstall } from './utils/vscode'
import { updateThemes } from './hooks/updateThemes'
import { mergeTheme } from './hooks/mergeTheme'

export async function activate(context: ExtensionContext) {
  const paths = themePaths(context)

  if (await isFreshInstall(context)) {
    const iconDefinitions = await workspace.fs
      .readFile(iconDefinitionsPath(context))
      .then(b => JSON.parse(b.toString()) as IconDefinitions)

    // TODO only trigger if config is not the default
    await updateThemes(mergeTheme(getConfiguration()), paths, iconDefinitions)
  }

  context.subscriptions.push(
    // TODO centralize commands and factorize reset
    commands.registerCommand('catppuccin-icons.reset', async () => {
      const iconDefinitions = await workspace.fs
        .readFile(iconDefinitionsPath(context))
        .then(b => JSON.parse(b.toString()) as IconDefinitions)

      await updateThemes(mergeTheme({}), paths, iconDefinitions)

      const config = workspace.getConfiguration('catppuccin-icons')
      await config.update('hidesExplorerArrows', undefined, ConfigurationTarget.Global)
    }),
  )

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(async (event) => {
      if (event.affectsConfiguration('catppuccin-icons')) {
        const iconDefinitions = await workspace.fs
          .readFile(iconDefinitionsPath(context))
          .then(b => JSON.parse(b.toString()) as IconDefinitions)

        const configuration = getConfiguration()
        const theme = mergeTheme(configuration)

        await updateThemes(theme, paths, iconDefinitions)
      }
    }),
  )
}

export function deactivate() {

}
