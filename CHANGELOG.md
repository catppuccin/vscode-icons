# Changelog

## v1.16.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.15.0...v1.16.0)

### 🚀 Enhancements

- **associations:** Add fastline built-in action files ([#268](https://github.com/catppuccin/vscode-icons/pull/268))
- **associations:** Add `.python-version` to `python-config` icon ([#272](https://github.com/catppuccin/vscode-icons/pull/272))
- **associations:** Add `database` icon for `.dat` files ([#271](https://github.com/catppuccin/vscode-icons/pull/271))
- Add benchmark icon ([#283](https://github.com/catppuccin/vscode-icons/pull/283))
- **associations:** Change `pl` to Perl from Prolog & add more ([#294](https://github.com/catppuccin/vscode-icons/pull/294))
- Java class/interface/record/enum/exception icons ([#247](https://github.com/catppuccin/vscode-icons/pull/247))

### 🩹 Fixes

- **associations:** Add `.cts` and `.mts` extensions for eslint ([#263](https://github.com/catppuccin/vscode-icons/pull/263))
- **associations:** Add common extensions and `.vuerc` for vue ([#265](https://github.com/catppuccin/vscode-icons/pull/265))
- **associations:** Add `tauri.conf.json5` and `Tauri.toml` ([#270](https://github.com/catppuccin/vscode-icons/pull/270))

### 🏡 Chore

- Re-generate previews ([#297](https://github.com/catppuccin/vscode-icons/pull/297))

### 🤖 CI

- Add `previews.yml` to re-generate assets ([#232](https://github.com/catppuccin/vscode-icons/pull/232))
- **previews:** Limit to assets dir ([#296](https://github.com/catppuccin/vscode-icons/pull/296))
- **previews:** Rely on more default values ([#298](https://github.com/catppuccin/vscode-icons/pull/298))

### ❤️ Contributors

- Hammy ([@sgoudham](http://github.com/sgoudham))
- PraZ ([@prazdevs](http://github.com/prazdevs))
- Yttrium ([@Alecton4](http://github.com/Alecton4))
- Uncenter ([@uncenter](http://github.com/uncenter))
- Quentin <git@quentinguidee.dev>
- Xenos ([@Xenos-the-stupid](http://github.com/Xenos-the-stupid))

## v1.15.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.14.0...v1.15.0)

### 🚀 Enhancements

- Add thrift icon as apache ([#245](https://github.com/catppuccin/vscode-icons/pull/245))
- Release icon (go-releaser) ([#246](https://github.com/catppuccin/vscode-icons/pull/246))
- Vanilla-extract icon ([#248](https://github.com/catppuccin/vscode-icons/pull/248))
- Rojo icon (unassociated) ([#249](https://github.com/catppuccin/vscode-icons/pull/249))
- Roblox icon ([#250](https://github.com/catppuccin/vscode-icons/pull/250))
- .luaurc association ([#251](https://github.com/catppuccin/vscode-icons/pull/251))
- Pyproject.toml + poetry.lock icons ([#252](https://github.com/catppuccin/vscode-icons/pull/252))
- Rust config icons ([#253](https://github.com/catppuccin/vscode-icons/pull/253))
- Pre-commit file and folder icons ([#255](https://github.com/catppuccin/vscode-icons/pull/255))
- Authotkey icon ([#256](https://github.com/catppuccin/vscode-icons/pull/256))
- Crates folder association ([#257](https://github.com/catppuccin/vscode-icons/pull/257))
- Gradle folder icon ([#258](https://github.com/catppuccin/vscode-icons/pull/258))
- Themes folder icon ([#259](https://github.com/catppuccin/vscode-icons/pull/259))

### 🩹 Fixes

- Add missing postcss.config.{mts,mjs} to defaults ([#243](https://github.com/catppuccin/vscode-icons/pull/243))

### 📖 Documentation

- Document palettes and compound icons ([#260](https://github.com/catppuccin/vscode-icons/pull/260))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- Xenos ([@Xenos-the-stupid](http://github.com/Xenos-the-stupid))

## v1.14.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.13.0...v1.14.0)

### 🚀 Enhancements

- Go templates icon ([90ba81d](https://github.com/catppuccin/vscode-icons/commit/90ba81d))
- Add flutter icons ([#181](https://github.com/catppuccin/vscode-icons/pull/181))
- Add vitest-workspace associations ([#186](https://github.com/catppuccin/vscode-icons/pull/186))
- **associations:** Add `typst.toml` manifest file to typst ([#210](https://github.com/catppuccin/vscode-icons/pull/210))
- **associations:** Add snapfile to fastlane ([#209](https://github.com/catppuccin/vscode-icons/pull/209))
- **associations:** Add `bench` and `benches` to `benchmark` ([#206](https://github.com/catppuccin/vscode-icons/pull/206))

### 🩹 Fixes

- **associations:** Add `cts` and `mts` to typescript file extensions ([#197](https://github.com/catppuccin/vscode-icons/pull/197))
- Apply settings when using Frappé ([#212](https://github.com/catppuccin/vscode-icons/pull/212))
- Change toml icon color to maroon ([#191](https://github.com/catppuccin/vscode-icons/pull/191))
- Incorrect icon fill colors ([#229](https://github.com/catppuccin/vscode-icons/pull/229))
- Inconsistencies in `unflavored` icons ([#230](https://github.com/catppuccin/vscode-icons/pull/230))
- **scripts:** Exit on all `consola.error`s ([#234](https://github.com/catppuccin/vscode-icons/pull/234))

### 💅 Refactors

- **scripts:** Split `icons.ts` & add new commands ([#199](https://github.com/catppuccin/vscode-icons/pull/199))
- **scripts:** Pass OS path separator to `mkdtemp` ([#224](https://github.com/catppuccin/vscode-icons/pull/224))

### 📖 Documentation

- **readme:** Add reference to jetbrains-icons ([#180](https://github.com/catppuccin/vscode-icons/pull/180))

### 📦 Build

- **package.json:** Add `--sequential` to `icons` script ([#233](https://github.com/catppuccin/vscode-icons/pull/233))

### 🏡 Chore

- Update dependencies ([c244a4f](https://github.com/catppuccin/vscode-icons/commit/c244a4f))
- Upgrade to pnpm@9 ([19b6c32](https://github.com/catppuccin/vscode-icons/commit/19b6c32))
- Cleanup and update dependencies ([#195](https://github.com/catppuccin/vscode-icons/pull/195))
- Configure Renovate ([#213](https://github.com/catppuccin/vscode-icons/pull/213))

### 🤖 CI

- Update actions ([14e6285](https://github.com/catppuccin/vscode-icons/commit/14e6285))
- Upload VSIX as CI artifact ([#225](https://github.com/catppuccin/vscode-icons/pull/225))

### ❤️ Contributors

- Uncenter ([@uncenter](http://github.com/uncenter))
- Hammy ([@sgoudham](http://github.com/sgoudham))
- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- Quentin <git@quentinguidee.dev>
- Thelooter <evekolb2204@gmail.com>

## v1.13.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.12.0...v1.13.0)

### 🚀 Enhancements

- Vital icons ([#159](https://github.com/catppuccin/vscode-icons/pull/159))
- Apple file icons ([bd9e725](https://github.com/catppuccin/vscode-icons/commit/bd9e725))
- Add amber files ([0992918](https://github.com/catppuccin/vscode-icons/commit/0992918))
- Add fastlane folder ([ee7d193](https://github.com/catppuccin/vscode-icons/commit/ee7d193))
- Add stata icons ([8a52dc4](https://github.com/catppuccin/vscode-icons/commit/8a52dc4))
- Add caddy folder ([35a1fe2](https://github.com/catppuccin/vscode-icons/commit/35a1fe2))

### 📖 Documentation

- Various improvements ([#157](https://github.com/catppuccin/vscode-icons/pull/157))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- _eyewave ([@eye-wave](http://github.com/eye-wave))
- Uncenter ([@uncenter](http://github.com/uncenter))

## v1.12.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.11.0...v1.12.0)

### 🚀 Enhancements

- Spwn icon ([#144](https://github.com/catppuccin/vscode-icons/pull/144))
- Midi icon ([#145](https://github.com/catppuccin/vscode-icons/pull/145))
- Json schema icon ([#149](https://github.com/catppuccin/vscode-icons/pull/149))
- Turborepo file + folder icons ([#143](https://github.com/catppuccin/vscode-icons/pull/143))
- Humans txt icon ([#135](https://github.com/catppuccin/vscode-icons/pull/135), [#150](https://github.com/catppuccin/vscode-icons/pull/150))
- Add java alt icons ([8f8d319](https://github.com/catppuccin/vscode-icons/commit/8f8d319))
- Angular icons (require custom associations) ([215be97](https://github.com/catppuccin/vscode-icons/commit/215be97))
- Azure devops folder icon ([1e2ac09](https://github.com/catppuccin/vscode-icons/commit/1e2ac09))
- Ansible-lint icon ([ed5a3fa](https://github.com/catppuccin/vscode-icons/commit/ed5a3fa))
- Salesforce apex class icon ([6236014](https://github.com/catppuccin/vscode-icons/commit/6236014))
- Add nix folder icons ([#154](https://github.com/catppuccin/vscode-icons/pull/154))
- Add cspell icon ([1d0f6d5](https://github.com/catppuccin/vscode-icons/commit/1d0f6d5))
- Add zap icon ([c5efbdd](https://github.com/catppuccin/vscode-icons/commit/c5efbdd))
- Solid icon (requires custom association) ([bdd6b6e](https://github.com/catppuccin/vscode-icons/commit/bdd6b6e))
- Bazel icon ([cc99273](https://github.com/catppuccin/vscode-icons/commit/cc99273))
- Add nest alt icons (require custom associations) ([ea17069](https://github.com/catppuccin/vscode-icons/commit/ea17069))
- Typst icon ([307eb09](https://github.com/catppuccin/vscode-icons/commit/307eb09))
- Taskfile icon ([9fd804f](https://github.com/catppuccin/vscode-icons/commit/9fd804f))
- Plantuml icon ([42945fb](https://github.com/catppuccin/vscode-icons/commit/42945fb))

### 🩹 Fixes

- Json schema extension ([205d500](https://github.com/catppuccin/vscode-icons/commit/205d500))
- Security + assembly icon viewbox ([5f6a4fb](https://github.com/catppuccin/vscode-icons/commit/5f6a4fb))

### 📖 Documentation

- Fix typo ([#155](https://github.com/catppuccin/vscode-icons/pull/155))

### 🏡 Chore

- Optimize icons ([#153](https://github.com/catppuccin/vscode-icons/pull/153))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- Uncenter ([@uncenter](http://github.com/uncenter))
- _eyewave ([@eye-wave](http://github.com/eye-wave))

## v1.11.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.10.0...v1.11.0)

### 🚀 Enhancements

- Supercollider icon ([a5d7196](https://github.com/catppuccin/vscode-icons/commit/a5d7196))
- Huff icon ([e762f30](https://github.com/catppuccin/vscode-icons/commit/e762f30))
- Ruff icon ([6fedbb2](https://github.com/catppuccin/vscode-icons/commit/6fedbb2))
- Git cliff icon ([08b9f08](https://github.com/catppuccin/vscode-icons/commit/08b9f08))
- Pixi icons ([5fc81c5](https://github.com/catppuccin/vscode-icons/commit/5fc81c5))
- Azure pipeliens folder ([3e59d2b](https://github.com/catppuccin/vscode-icons/commit/3e59d2b))
- Luau icon ([77dc8f3](https://github.com/catppuccin/vscode-icons/commit/77dc8f3))
- Gleam icons ([509ec9c](https://github.com/catppuccin/vscode-icons/commit/509ec9c))
- Dub icons ([c31fdf8](https://github.com/catppuccin/vscode-icons/commit/c31fdf8))
- Nuxtrc icon ([a626dc5](https://github.com/catppuccin/vscode-icons/commit/a626dc5))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))

## v1.10.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.9.1...v1.10.0)

### 🚀 Enhancements

- Vento file icon ([1bf4bb6](https://github.com/catppuccin/vscode-icons/commit/1bf4bb6))
- Vhs/tape file icon ([180fa4e](https://github.com/catppuccin/vscode-icons/commit/180fa4e))
- Wxt file and folder ([b5d3b6a](https://github.com/catppuccin/vscode-icons/commit/b5d3b6a))
- Cargo file icons ([9d20bc7](https://github.com/catppuccin/vscode-icons/commit/9d20bc7))
- .env.cat file association ([#118](https://github.com/catppuccin/vscode-icons/pull/118))
- Asciidoc files ([5a07e62](https://github.com/catppuccin/vscode-icons/commit/5a07e62))

### 🩹 Fixes

- Add html extension association ([#112](https://github.com/catppuccin/vscode-icons/pull/112))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- Elijah Olmos ([@elijaholmos](http://github.com/elijaholmos))
- Quentin <git@arra.red>

## v1.9.1

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.9.0...v1.9.1)

### 🩹 Fixes

- Android/assets/cypress/docs open folders ([6a0f920](https://github.com/catppuccin/vscode-icons/commit/6a0f920))

### 📦 Build

- New and cleaner icons CLI scripts ([a711f50](https://github.com/catppuccin/vscode-icons/commit/a711f50))
- Icons/associations integrity check ([96e7e24](https://github.com/catppuccin/vscode-icons/commit/96e7e24))

### 🏡 Chore

- Bump dependencies ([a4fe485](https://github.com/catppuccin/vscode-icons/commit/a4fe485))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))

## v1.9.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.8.0...v1.9.0)

### 🚀 Enhancements

- Webmanifest + more audio associations (#93,#94) ([#93](https://github.com/catppuccin/vscode-icons/issues/93), [#94](https://github.com/catppuccin/vscode-icons/issues/94))
- Liquid icon ([#100](https://github.com/catppuccin/vscode-icons/pull/100))
- Biome icon ([#101](https://github.com/catppuccin/vscode-icons/pull/101))
- Assembly icon ([#102](https://github.com/catppuccin/vscode-icons/pull/102))
- Twig icon ([#103](https://github.com/catppuccin/vscode-icons/pull/103))
- Security.md icon & security/audit folder ([#104](https://github.com/catppuccin/vscode-icons/pull/104))
- Yarn folder and latest yarn files ([#105](https://github.com/catppuccin/vscode-icons/pull/105))
- Root folder ([#106](https://github.com/catppuccin/vscode-icons/pull/106))
- Direnv folder ([#107](https://github.com/catppuccin/vscode-icons/pull/107))
- Add GCP icon ([#108](https://github.com/catppuccin/vscode-icons/pull/108))
- New c-related icons ([#109](https://github.com/catppuccin/vscode-icons/pull/109))
- Assets folder ([d852e85](https://github.com/catppuccin/vscode-icons/commit/d852e85))
- Content folder ([bff3c3b](https://github.com/catppuccin/vscode-icons/commit/bff3c3b))

### ❤️ Contributors

- Prazdevs ([@prazdevs](http://github.com/prazdevs))
- Winston <hey@winston.sh>
- _eyewave

## v1.8.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.7.0...v1.8.0)

### 🚀 Enhancements

- Custom icon associations ([#89](https://github.com/catppuccin/vscode-icons/pull/89))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.7.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.6.0...v1.7.0)

### 🚀 Enhancements

- Add monochrome icons configuration option ([#87](https://github.com/catppuccin/vscode-icons/pull/87))

### 📖 Documentation

- Document monochrome configuration ([009d5bd](https://github.com/catppuccin/vscode-icons/commit/009d5bd))

### 🤖 CI

- Typecheck ([4854772](https://github.com/catppuccin/vscode-icons/commit/4854772))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.6.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.5.0...v1.6.0)

### 🚀 Enhancements

- Add specificFolders customization option ([#85](https://github.com/catppuccin/vscode-icons/pull/85))

### 🏡 Chore

- Add license/readme credits ([#86](https://github.com/catppuccin/vscode-icons/pull/86))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.5.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.4.0...v1.5.0)

### 🚀 Enhancements

- Hooks folder icon ([350fae5](https://github.com/catppuccin/vscode-icons/commit/350fae5))
- Intellij folder icon ([f099e5b](https://github.com/catppuccin/vscode-icons/commit/f099e5b))
- Devcontainer file/folder icons ([377704a](https://github.com/catppuccin/vscode-icons/commit/377704a))
- Adobe (ae, ai, id, ps, xd) file icons ([dc1a22c](https://github.com/catppuccin/vscode-icons/commit/dc1a22c))
- Puppeteer icon ([7212fcf](https://github.com/catppuccin/vscode-icons/commit/7212fcf))

### 🏡 Chore

- Add missing sponsor/bugs links ([deb4410](https://github.com/catppuccin/vscode-icons/commit/deb4410))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.4.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.3.0...v1.4.0)

### 🚀 Enhancements

- Evelenty and astro icons ([#82](https://github.com/catppuccin/vscode-icons/pull/82))

### 🩹 Fixes

- Regenerate themes on fresh install ([#81](https://github.com/catppuccin/vscode-icons/pull/81))

### 🏡 Chore

- Add bug report issue template ([#80](https://github.com/catppuccin/vscode-icons/pull/80))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.3.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.2.0...v1.3.0)

### 🚀 Enhancements

- Hide explorer arrows customization ([#79](https://github.com/catppuccin/vscode-icons/pull/79))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.2.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- Browser-compatible build ([#77](https://github.com/catppuccin/vscode-icons/pull/77))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))

## v1.1.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v1.0.0...v1.1.0)

### 🚀 Enhancements

- Php icon ([#73](https://github.com/catppuccin/vscode-icons/pull/73))
- Org icon ([#74](https://github.com/catppuccin/vscode-icons/pull/74))

### 🏡 Chore

- Add changelog ([c512d36](https://github.com/catppuccin/vscode-icons/commit/c512d36))

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs)) 

## v1.0.0

[compare changes](https://github.com/catppuccin/vscode-icons/compare/v0.33.0...v1.0.0)

### 🚀 Enhancements

- Rework all existing icons for lower resolutions
- Add many new file and folder icons
- Build extension for upcoming customization features
- Centralize file and folder icon associations

### 🏡 Chore

- Explicit design guidelines
- Rework icon previews
- Better documentation

### ❤️ Contributors

- Prazdevs ([@prazdevs](https://github.com/prazdevs))
