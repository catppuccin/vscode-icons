import type { ExtensionContext } from 'vscode'
import { commands, workspace } from 'vscode'
import { updateThemes } from './hooks/updateThemes'
import { isFreshInstall, promptToReload } from './hooks/interactions'
import { resetConfig } from './hooks/configuration'
import { updateIcons } from './hooks/updateIcons'

export async function activate(context: ExtensionContext) {
  if (await isFreshInstall(context)) {
    await updateIcons(context)
    await updateThemes(context)
    await promptToReload()
  }

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(async (event) => {
      if (event.affectsConfiguration('catppuccin-icons')) {
        if (event.affectsConfiguration('catppuccin-icons.monochrome'))
          await updateIcons(context)

        await updateThemes(context)
        await promptToReload()
      }
    }),
  )

  context.subscriptions.push(
    commands.registerCommand('catppuccin-icons.reset', async () => {
      await resetConfig()
      await updateIcons(context)
      await updateThemes(context)
      await promptToReload()
    }),
  )
}

export function deactivate() {

}
