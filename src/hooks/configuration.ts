import defu from 'defu'
import { ConfigurationTarget, workspace } from 'vscode'
import { defaultConfig } from '~/defaults'
import type { Config } from '~/types'

/**
 * Get user catppuccin-icons configuration
 * @returns explicitly set configuration keys
 */
export function getConfig(): Partial<Config> {
  const config = workspace.getConfiguration('catppuccin-icons')

  return {
    hidesExplorerArrows: config.get('hidesExplorerArrows'),
    specificFolders: config.get('specificFolders'),
    associations: config.get('associations'),
    monochrome: config.get('monochrome'),
  }
}

/**
 * Reset catppuccin-icons configuration
 * Deletes keys from `settings.json`
 */
export async function resetConfig() {
  const config = workspace.getConfiguration('catppuccin-icons')
  await config.update('hidesExplorerArrows', undefined, ConfigurationTarget.Global)
  await config.update('specificFolders', undefined, ConfigurationTarget.Global)
  await config.update('associations', undefined, ConfigurationTarget.Global)
  await config.update('monochrome', undefined, ConfigurationTarget.Global)
}

/**
 * Compares current user config to factory defaults
 * @returns `true` if parsed config === defaults
 */
export function isDefaultConfig() {
  const config = defu(getConfig(), defaultConfig)

  return JSON.stringify(config) === JSON.stringify(defaultConfig)
}
