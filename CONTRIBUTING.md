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
| `src/constants` | Values used throughout the extension, mostly config-related. |
| `src/defaults` | Default file/folder icon associations. |
| `src/hooks` | Extension runtime code (commands). |
| `src/utils` | Helper functions independant from VSCode API. |

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
| `icons` | CLI to optimize/generate icons and icon previews. |
| `integrity` | Ensures all default associations refer to existing icons. |
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

### Palettes and usable colors

Given any Catppuccin flavours, only `accent` (`rosewater`, `flamingo`, `pink`, `mauve`, `red`, `maroon`, `peach`, `yellow`, `green`, `teal`, `sky`, `sapphire`, `blue`, `lavender`), `text` and `overlay1` can be used in icon colors.

- `accent` colors are used like any color, to match a logo for instance.
- `overlay1` is used to represent gray.
- `test` is used as the default (black or white) color. It is also the folder color.

### Compound icons

Some icons are composed of several other icons, usually smaller, such as `folder` icons and `config` icons (`vue-config`, `ts-config`...).
Shared symbols should have the same size across icons. For example, the cog in `config` icons should always have the same size and be positionned at the bottom right.

> [!WARNING]
> Compound icons can be harder to design as the icon parts are much smaller. They may need to be simplified for the best readability.

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

4. Run `pnpm icons -a` to optimize the SVGs, generate other flavors and generate previews. You can also proceed step by step (run `pnpm icons --help` for more info).

### Running the extension locally

1. Build the extension using `pnpm build`.

2. Run the extension host by pressing <kbd>F5</kbd> or using the `Extension` config from the `Run and debug` VSCode tab.

> [!NOTE]
> Hot reload is not supported at the moment. Extension should be rebuilt and extension host process restarted to apply changes.

🎉 Happy contributing! 🎉
