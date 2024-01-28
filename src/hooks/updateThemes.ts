import { Buffer } from 'node:buffer'
import type { ExtensionContext, Uri } from 'vscode'
import { window, workspace } from 'vscode'
import { flavorEntries } from '@catppuccin/palette'
import { promptToReload } from './interactions'
import { getConfig } from '~/hooks/configuration'
import { getIconDefinitions } from '~/hooks/iconDefinitions'
import { compileTheme } from '~/utils/themes'
import { getThemePaths } from '~/hooks/paths'

export async function updateThemes(context: ExtensionContext) {
  const iconDefinitions = await getIconDefinitions(context)
  const paths = getThemePaths(context)
  const config = getConfig()
  const theme = compileTheme(config, iconDefinitions)
  const flavors = flavorEntries.map(([f]) => f)

  return Promise.all(flavors.map(async flavor =>
    workspace.fs.writeFile(
      paths[flavor].theme,
      Buffer.from(JSON.stringify(theme, null, 2)),
    ),
  )).then(async () => {
    await promptToReload()
  }).catch((e: Error) => {
    window.showErrorMessage(`Failed to save re-compiled theme: \n${e.message}`)
  })
}

export async function writeFile(uri: Uri, content: unknown) {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(content, null, 2)))
    .then(
      () => {},
      (error: Error) => {
        window.showErrorMessage(error.message)
      },
    )
}
