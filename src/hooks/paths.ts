import { Uri } from 'vscode'
import type { ExtensionContext } from 'vscode'
import type { ThemePaths } from '~/types'

/**
 * Get extension runtime root (`dist`)
 * @param context current extension context
 * @returns root uri
 */
function getRootPath(context: ExtensionContext) {
  return Uri.joinPath(context.extensionUri, 'dist')
}

/**
 * Get (fresh install) flag path
 * @param context current extension context
 * @returns flag uri
 */
export function getFlagPath(context: ExtensionContext) {
  const root = getRootPath(context)
  return Uri.joinPath(root, '.flag')
}

/**
 * Get unflavored (css-vars) icons folder path
 * @param context current extension context
 * @returns unflavored icons folder uri
 */
export function getUnflavoredPath(context: ExtensionContext) {
  const root = getRootPath(context)
  return Uri.joinPath(root, 'unflavored')
}

/**
 * Get flavored folder paths
 * @param context current extension context
 * @returns flavored icons/theme paths
 */
export function getThemePaths(context: ExtensionContext): ThemePaths {
  const root = getRootPath(context)
  return {
    frappe: {
      icons: Uri.joinPath(root, 'latte', 'icons'),
      theme: Uri.joinPath(root, 'latte', 'theme.json'),
    },
    latte: {
      icons: Uri.joinPath(root, 'latte', 'icons'),
      theme: Uri.joinPath(root, 'latte', 'theme.json'),
    },
    macchiato: {
      icons: Uri.joinPath(root, 'macchiato', 'icons'),
      theme: Uri.joinPath(root, 'macchiato', 'theme.json'),
    },
    mocha: {
      icons: Uri.joinPath(root, 'mocha', 'icons'),
      theme: Uri.joinPath(root, 'mocha', 'theme.json'),
    },
  }
}
