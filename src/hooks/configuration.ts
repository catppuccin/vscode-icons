import defu from 'defu'
import { ConfigurationTarget, workspace } from 'vscode'
import { defaultConfig } from '~/defaults'
import { CONFIG_KEYS, CONFIG_ROOT } from '~/constants'
import type { Config } from '~/types'

/**
 * Get user catppuccin-icons configuration
 * @returns explicitly set configuration keys
 */
export function getConfig(): Partial<Config> {
  const config = workspace.getConfiguration(CONFIG_ROOT)

  return {
    hidesExplorerArrows: config.get(CONFIG_KEYS.HidesExplorerArrows),
    specificFolders: config.get(CONFIG_KEYS.SpecificFolders),
    associations: {
      languageIds: config.get(CONFIG_KEYS.AssociationsLanguages, {}),
      fileExtensions: config.get(CONFIG_KEYS.AssociationsExtensions, {}),
      fileNames: config.get(CONFIG_KEYS.AssociationsFiles, {}),
      folderNames: config.get(CONFIG_KEYS.AssociationsFolders, {}),
    },
    monochrome: config.get(CONFIG_KEYS.Monochrome),
  }
}

/**
 * Reset catppuccin-icons configuration
 * Deletes keys from `settings.json`
 */
export async function resetConfig() {
  const config = workspace.getConfiguration(CONFIG_ROOT)
  for (const k of Object.values(CONFIG_KEYS))
    await config.update(k, undefined, ConfigurationTarget.Global)
}

/**
 * Compares current user config to factory defaults
 * @returns `true` if parsed config === defaults
 */
export function isDefaultConfig() {
  const config = defu(getConfig(), defaultConfig)

  return JSON.stringify(config) === JSON.stringify(defaultConfig)
}
