/**
 * Paths from extension context/runtime
 */
import type { ExtensionContext } from 'vscode'
import { Uri } from 'vscode'
import type { Flavor, ThemePaths } from '~/types'

function flavorThemePath(root: Uri, flavor: Flavor) {
  return {
    theme: Uri.joinPath(root, flavor, 'theme.json'),
    icons: Uri.joinPath(root, flavor, 'icons'),
  }
}

function rootPath(context: ExtensionContext) {
  return Uri.joinPath(context.extensionUri, 'dist')
}

export function themePaths(context: ExtensionContext): ThemePaths {
  const root = rootPath(context)
  return {
    frappe: flavorThemePath(root, 'frappe'),
    latte: flavorThemePath(root, 'latte'),
    macchiato: flavorThemePath(root, 'macchiato'),
    mocha: flavorThemePath(root, 'mocha'),
  }
}

export function iconDefinitionsPath(context: ExtensionContext) {
  const root = rootPath(context)
  return Uri.joinPath(root, 'iconDefinitions.json')
}

export function flagPath(context: ExtensionContext) {
  const root = rootPath(context)
  return Uri.joinPath(root, '.flag')
}
