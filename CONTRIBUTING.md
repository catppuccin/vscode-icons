# Contributing

🎉 First off, thanks for taking the time to contribute! 🎉

## Recommendations

- Before starting to work on a pull request, make sure a related issue exists or create one to discuss with the maintainers about the feature(s) you want for the project.
- We use [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)'s rules for creating explicit and meaningful commit messages.
- If it's your first time contributing to a project then you should look to the popular [first-contributions](https://github.com/firstcontributions/first-contributions) repository on GitHub. This will give you hands-on experience with the features of GitHub required to make a contribution. As always, feel free to join our [Discord](https://discord.com/servers/catppuccin-907385605422448742) to ask any questions and clarify your understanding, we are more than happy to help!

## Development

### Directory Structure

The repository is structured so different components live as independently as possible.

| Folder | Description |
|---|---|
| `assets` | Auto-generated previews. |
| `icons` | Icon SVG files for each flavour. |
| `scripts` | Scripts for optimizing icons, generating flavoured icons, building previews and building the extension. |
| `src/defaults` | Default file/folder icon associations. |
| `src/hooks` | Extension runtime code (commands). |

### Setup

We use a set of tools to build the extension and assets:

- [`nodejs@latest`](https://nodejs.org/en) as runtime.
- [`pnpm`](http://pnpm.io) as dependency manager.
- [`catwalk`](https://github.com/catppuccin/toolbox/tree/main/catwalk) as in-house preview generator (_optional_).

### Scripts

We provide a set of npm scripts to make development and contribution easier:

| Script | Description |
|---|---|
| `build` | Builds the extension and themes to `dist`. |
| `catwalk` | Generates the main preview (requires `catwalk`). |
| `icons:generate` | Generates missing flavoured icon SVGs in their respective flavour folder. |
| `icons:optimize` | Runs all SVGs through `@iconify/tools/cleanupSVG` and `svgo`. |
| `icons:preview` | Generates complete flavour previews from existing icons. |
| `pack` | Generates VSIX extension file. |

### Notes

- The extension is written in TypeScript using ESM syntax, it is later compiled and polyfilled to CJS by [`tsup`](https://tsup.egoist.dev/).
- Try using the `vscode` API as much as possible in `hooks` and commands at runtime to avoid relying on native node APIs.

## Design guidelines

The following guidelines are what make the icons and the theme consistent. They are the core of this repo and should be respected:

- Canvas should be 16x16.
- Use 1px strokes and no fill.
- Use round stroke-linecap and stroke-linejoin.
- Anchor points should be on entire or half values as much as possible.
- Only use catppuccin colors.

> [!NOTE]
> The design guidelines are still a work in progress. Keep in mind the decision to add an icon is ultimately that of the catppuccin maintainers and team.

## Workflow examples

_Make sure to run `pnpm install` to ensure dependencies are installed and up to date before callign any other script._

### Creating new icons

1. Create an icon SVG for a given flavour using your favourite editor ([Inkscape](https://inkscape.org/) is perfect for this!). You can use the given templates (especially for folder icons) or existing icons as base. Make sure to repect the [design guidelines](#design-guidelines).

2. Put the icon in its corresponding folder as `icons/<flavour>/<icon-name>.svg`, with naming convention as follows:
    - `<icon-name>.svg` in kebab-case for a file icon.
    - `folder_<folder-name>.svg` and `folder_<folder-name>_open.svg` for a folder icon (don't forget the open version).

3. Declare its default associations in the corresponding file with the `<icon-name>` as key of the exported object:
    - `src/defaults/fileIcons.ts` for files.
    - `src/defaults/folderIcons.ts` for folders.

4. Run `pnpm icons:optimize` and `pnpm icons:generate` and other flavours will be automatically created in their respective folders!

5. You can run `pnpm icons:preview` to regenerate flavour previews and ensure everything is looking fine.

### Running the extension locally

1. Build the extension using `pnpm build`.

2. Run the extension host by pressing <kbd>F5</kbd> or using the `Extension` config from the `Run and debug` VSCode tab.

> [!NOTE]
> Hot reload is not supported at the moment. Extension should be rebuilt and extension host process restarted to apply changes.

🎉 Happy contributing! 🎉
