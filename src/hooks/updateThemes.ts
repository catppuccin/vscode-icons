import type { ExtensionContext } from 'vscode'
import { Uri, window, workspace } from 'vscode'
import { flavorEntries } from '@catppuccin/palette'
import { readFile, writeFile, writeJsonFile } from '~/hooks/interactions'
import { getConfig } from '~/hooks/configuration'
import { getIconDefinitions } from '~/hooks/iconDefinitions'
import { compileTheme } from '~/utils/themes'
import { getThemePaths, getUnflavoredPath } from '~/hooks/paths'
import { compileIcon, hashedSvgPath, iconHash } from '~/utils/icons'

/**
 * Update themes and icons according to configuration
 * @param context current extension context
 * @param icons should icon files be regenerated
 */
export async function updateThemes(context: ExtensionContext, icons = false) {
  const iconDefinitions = await getIconDefinitions(context)
  const paths = getThemePaths(context)
  const config = getConfig()
  const hash = iconHash(config)
  const flavors = flavorEntries.map(([f]) => f)

  if (icons) {
    const unflavored = getUnflavoredPath(context)
    const unflavoredIcons = await workspace.fs.readDirectory(unflavored)

    await Promise.all(flavors.map(async (flavor) => {
      // delete flavored icons
      await workspace.fs.delete(paths[flavor].icons, { recursive: true })
      // recreate flavored icon folder
      await workspace.fs.createDirectory(paths[flavor].icons)
      // recreate flavored icons with hashed paths
      await Promise.all(unflavoredIcons.map(async ([i]) => {
        const icon = await readFile(Uri.joinPath(unflavored, i))
        await writeFile(
          Uri.joinPath(paths[flavor].icons, hashedSvgPath(i, hash)),
          compileIcon(icon, flavor, { monochrome: config.monochrome }),
        )
      }))
    })).catch((e: Error) => {
      window.showErrorMessage(`Failed to save re-compiled icons: \n${e.message}`)
    })
  }

  // add hashed paths to iconDefs
  for (const i in iconDefinitions)
    iconDefinitions[i].iconPath = hashedSvgPath(iconDefinitions[i].iconPath, hash)

  // create and write `theme.json` files
  const theme = compileTheme(config, iconDefinitions)
  await Promise.all(flavors.map(async (flavor) => {
    await writeJsonFile(paths[flavor].theme, theme)
  })).catch((e: Error) => {
    window.showErrorMessage(`Failed to save re-compiled theme: \n${e.message}`)
  })
}
