/**
 * Functions to interact with VSCode window/workspace
 */
import { Buffer } from 'node:buffer'
import type { ExtensionContext, Uri } from 'vscode'
import { commands, window, workspace } from 'vscode'
import { flagPath } from './paths'
import type { Config } from '~/types'

export async function writeFile(uri: Uri, content: unknown) {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(content, null, 2)))
    .then(
      () => {},
      (error: Error) => {
        window.showErrorMessage(error.message)
      },
    )
}

export async function promptToReload() {
  const message = `Catppuccin Icons: Theme changed - Reload required.`
  const action = 'Reload window'
  await window.showInformationMessage(message, action).then(async (selectedAction) => {
    if (selectedAction === action)
      commands.executeCommand('workbench.action.reloadWindow')
  })
};

export function getConfiguration(): Config {
  const config = workspace.getConfiguration('catppuccin-icons')

  return {
    hidesExplorerArrows: config.get('hidesExplorerArrows', false),
  }
}

export async function isFreshInstall(context: ExtensionContext) {
  const flag = flagPath(context)
  return await workspace.fs.stat(flag).then(
    () => false,
    () => workspace.fs.writeFile(flag, Buffer.from('')).then(
      () => true,
      () => true,
    ),
  )
}
