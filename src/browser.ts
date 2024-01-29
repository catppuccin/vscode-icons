import type { ConfigurationChangeEvent, ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'
import { CONFIG_ROOT } from '~/constants'

/**
 * Web extension entrypoint
 * @see https://code.visualstudio.com/api/extension-guides/web-extensions
 */
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration(CONFIG_ROOT)) {
        window.showErrorMessage(
          'VSCode Web doesn\'t support advanced Catppuccin Icons options at the moment.',
        )
      }
    }),
  )
}
