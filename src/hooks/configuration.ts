import { ConfigurationTarget, workspace } from 'vscode'
import type { Config } from '~/types'

export function getConfig(): Partial<Config> {
  const config = workspace.getConfiguration('catppuccin-icons')

  return {
    hidesExplorerArrows: config.get('hidesExplorerArrows'),
    specificFolders: config.get('specificFolders'),
    associations: config.get('associations'),
    monochrome: config.get('monochrome'),
  }
}

export async function resetConfig() {
  const config = workspace.getConfiguration('catppuccin-icons')
  await config.update('hidesExplorerArrows', undefined, ConfigurationTarget.Global)
  await config.update('specificFolders', undefined, ConfigurationTarget.Global)
  await config.update('associations', undefined, ConfigurationTarget.Global)
  await config.update('monochrome', undefined, ConfigurationTarget.Global)
}
