import { Buffer } from 'node:buffer'
import { Uri, commands, window, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'

export async function promptToReload() {
  const message = `Catppuccin Icons: Theme changed - Reload required.`
  const action = 'Reload window'
  return window.showInformationMessage(message, action).then(async (selectedAction) => {
    if (selectedAction === action)
      commands.executeCommand('workbench.action.reloadWindow')
  })
};

export async function isFreshInstall(context: ExtensionContext) {
  const flag = Uri.joinPath(context.extensionUri, 'dist', '.flag')
  return await workspace.fs.stat(flag).then(
    () => false,
    () => workspace.fs.writeFile(flag, Buffer.from('')).then(
      () => true,
      () => true,
    ),
  )
}

export async function writeJsonFile(uri: Uri, content: unknown) {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(content, null, 2)))
    .then(
      () => {},
      (error: Error) => {
        window.showErrorMessage(error.message)
      },
    )
}
