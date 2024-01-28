import { type ExtensionContext, Uri, window, workspace } from 'vscode'
import { flavorEntries } from '@catppuccin/palette'
import { getConfig } from '~/hooks/configuration'
import { readFile, writeFile } from '~/hooks/interactions'
import { getThemePaths, getUnflavoredPath } from '~/hooks/paths'
import { compileIcon } from '~/utils/icons'

// TODO add some hash to icon names to bust cache

export async function updateIcons(context: ExtensionContext) {
  const unflavored = getUnflavoredPath(context)
  const paths = getThemePaths(context)
  const { monochrome } = getConfig()
  const unflavoredIcons = await workspace.fs.readDirectory(unflavored)
  const flavors = flavorEntries.map(([f]) => f)

  await Promise.all(flavors.map(async (flavor) => {
    await Promise.all(unflavoredIcons.map(async ([i]) => {
      const icon = await readFile(Uri.joinPath(unflavored, i))
      await writeFile(
        Uri.joinPath(paths[flavor].icons, i),
        compileIcon(icon, flavor, { monochrome }),
      )
    }))
  })).catch((e: Error) => {
    window.showErrorMessage(`Failed to save re-compiled icons: \n${e.message}`)
  })
}
