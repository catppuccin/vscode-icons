import type { ConfigurationChangeEvent, ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration('catppuccin-icons')) {
        window.showErrorMessage(
          'VSCode Web doesn\'t support advanced Catppuccin Icons options at the moment.',
        )
      }
    }),
  )
}
