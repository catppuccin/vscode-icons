import { Uri, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'
import type { IconDefinitions } from '~/types'

/**
 * Reads `iconDefinitions.json` file from dist
 * @param context current extension context
 * @returns parsed IconDefinitions
 */
export async function getIconDefinitions(context: ExtensionContext) {
  const path = Uri.joinPath(context.extensionUri, 'dist', 'iconDefinitions.json')
  return workspace.fs.readFile(path).then(f => JSON.parse(f.toString()) as IconDefinitions)
}
