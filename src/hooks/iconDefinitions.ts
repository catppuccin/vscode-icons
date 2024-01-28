import { Uri, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'
import type { IconDefinitions } from '~/types'

export async function getIconDefinitions(context: ExtensionContext) {
  const path = Uri.joinPath(context.extensionUri, 'dist', 'iconDefinitions.json')
  return workspace.fs.readFile(path).then(f => JSON.parse(f.toString()) as IconDefinitions)
}
