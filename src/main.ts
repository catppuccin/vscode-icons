import type { ExtensionContext } from 'vscode'
import { commands, workspace } from 'vscode'
import { COMMANDS, CONFIG_KEYS, CONFIG_ROOT } from '~/constants'
import { updateThemes } from '~/hooks/updateThemes'
import { isFreshInstall, promptToReload } from '~/hooks/interactions'
import { isDefaultConfig, resetConfig } from '~/hooks/configuration'

/**
 * Desktop extension entrypoint
 * @see https://code.visualstudio.com/api/get-started/extension-anatomy#extension-entry-file
 */
export async function activate(context: ExtensionContext) {
  if (await isFreshInstall(context) && !isDefaultConfig()) {
    await updateThemes(context, true)
    await promptToReload()
  }

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(async (event) => {
      if (event.affectsConfiguration(CONFIG_ROOT)) {
        const icons = event.affectsConfiguration(`${CONFIG_ROOT}.${CONFIG_KEYS.Monochrome}`)
        await updateThemes(context, icons)
        await promptToReload()
      }
    }),
  )

  context.subscriptions.push(
    commands.registerCommand(`${CONFIG_ROOT}.${COMMANDS.Reset}`, async () => {
      await resetConfig()
      await updateThemes(context, true)
      await promptToReload()
    }),
  )
}
