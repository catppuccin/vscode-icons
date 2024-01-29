import { Buffer } from 'node:buffer'
import { Uri, commands, window, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'

/**
 * Inform the user changes happened and reload is required
 */
export async function promptToReload() {
  const message = `Catppuccin Icons: Theme changed - Reload required.`
  const action = 'Reload window'
  await window.showInformationMessage(message, action).then(async (selectedAction) => {
    if (selectedAction === action)
      commands.executeCommand('workbench.action.reloadWindow')
  })
};

/**
 * Check if the extension was installed already (uses flag file)
 * @param context current extension context
 * @returns `true` if extension was just insalled
 */
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

/**
 * Read a file using `workspace.fs`
 * @param uri file path
 * @returns file content as string
 */
export async function readFile(uri: Uri) {
  return workspace.fs
    .readFile(uri)
    .then(b => b.toString())
}

/**
 * Write a file using `workspace.fs`
 * @param uri file path
 * @param content file content to write
 */
export async function writeFile(uri: Uri, content: string) {
  await workspace.fs
    .writeFile(uri, Buffer.from(content))
    .then(() => {})
}

/**
 * Write a json object to a file using `workspace.fs`
 * @param uri file path
 * @param json json object
 */
export async function writeJsonFile(uri: Uri, json: Record<string, any>) {
  await writeFile(uri, JSON.stringify(json, null, 2))
}
