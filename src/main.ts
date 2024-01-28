import { type ExtensionContext, commands, workspace } from 'vscode'
import { updateThemes } from './hooks/updateThemes'
import { isFreshInstall } from './hooks/interactions'
import { resetConfig } from './hooks/configuration'

export async function activate(context: ExtensionContext) {
  if (await isFreshInstall(context))
    await updateThemes(context)

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(async (event) => {
      if (event.affectsConfiguration('catppuccin-icons'))
        await updateThemes(context)
    }),
  )

  context.subscriptions.push(
    commands.registerCommand('catppuccin-icons.reset', async () => {
      await resetConfig()
      await updateThemes(context)
    }),
  )
}

export function deactivate() {

}
