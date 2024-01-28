import { Uri } from 'vscode'
import type { ExtensionContext } from 'vscode'
import type { ThemePaths } from '~/types'

function getRootPath(context: ExtensionContext) {
  return Uri.joinPath(context.extensionUri, 'dist')
}

export function getFlagPath(context: ExtensionContext) {
  const root = getRootPath(context)
  return Uri.joinPath(root, '.flag')
}

export function getUnflavoredPath(context: ExtensionContext) {
  const root = getRootPath(context)
  return Uri.joinPath(root, 'unflavored')
}

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
