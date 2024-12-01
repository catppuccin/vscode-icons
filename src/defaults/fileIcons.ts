/**
 * Default file icon associations
 * Keys are icon file basenames
 */

type FileIcons = Record<string, {
  languageIds?: Array<string>
  fileExtensions?: Array<string>
  fileNames?: Array<string>
}>

// @keep-sorted
const fileIcons: FileIcons = {
  'adobe-ae': {
    fileExtensions: ['aep'],
  },
  'adobe-ai': {
    fileExtensions: ['ai'],
  },
  'adobe-id': {
    fileExtensions: [
      'indd',
      'indl',
      'indb',
    ],
  },
  'adobe-ps': {
    fileExtensions: [
      'psd',
      'psb',
    ],
  },
  'adobe-xd': {
    fileExtensions: ['xd'],
  },
  'adonis': {
    fileNames: [
      '.adonisrc.json',
      'ace',
    ],
  },
  'alex': {
    fileNames: [
      '.alexrc',
      '.alexrc.yaml',
      '.alexrc.yml',
      '.alexrc.js',
    ],
  },
  'amber': {
    languageIds: ['amber'],
    fileExtensions: ['ab', 'amber'],
  },
  'android': {
    fileNames: ['androidmanifest.xml'],
    fileExtensions: [
      'apk',
      'smali',
      'dex',
    ],
  },
  'angular': {
    fileExtensions: ['ng-template'],
    fileNames: [
      'angular-cli.json',
      '.angular-cli.json',
      'angular.json',
      'ng-package.json',
    ],
  },
  'ansible-lint': {
    fileNames: [
      '.ansible-lint',
      'ansible-lint.yml',
      'ansible-lint.yaml',
    ],
  },
  'antlr': {
    fileExtensions: ['g4'],
  },
  'apache': {
    fileNames: [
      'maven.config',
      'jvm.config',
      'pom.xml',
    ],
    fileExtensions: [
      'thrift',
    ],
  },
  'api-blueprint': {
    fileExtensions: [
      'apib',
      'apiblueprint',
    ],
  },
  'apollo': {
    fileNames: [
      'apollo.config.js',
      'apollo.config.ts',
    ],
  },
  'apple': {
    fileNames: [
      '.ds_store',
      'apple-app-site-association',
    ],
  },
  'asciidoc': {
    fileExtensions: ['adoc', 'asciidoc', 'asc'],
  },
  'assembly': {
    fileExtensions: [
      'asm',
      'a51',
      'inc',
      'nasm',
      's',
      'ms',
      'agc',
      'ags',
      'aea',
      'argus',
      'mitigus',
      'binsource',
    ],
  },
  'astro-config': {
    fileNames: [
      'astro.config.js',
      'astro.config.mjs',
      'astro.config.cjs',
      'astro.config.ts',
      'astro.config.cts',
      'astro.config.mts',
    ],
  },
  'astro': {
    fileExtensions: ['astro'],
    languageIds: ['astro'],
  },
  'audio': {
    fileExtensions: [
      'aac',
      'aiff',
      'alac',
      'flac',
      'm4a',
      'm4p',
      'mogg',
      'mp3',
      'oga',
      'opus',
      'wav',
      'wma',
      'wv',
    ],
  },
  'autohotkey': {
    fileExtensions: ['ahk'],
    languageIds: ['ahk'],
  },
  'azure-pipelines': {
    fileNames: [
      'azure-pipelines.yml',
      'azure-pipelines.yaml',
      'azure-pipelines-main.yml',
      'azure-pipelines-main.yaml',
    ],
    fileExtensions: [
      'azure-pipelines.yml',
      'azure-pipelines.yaml',
      'azure-pipelines-main.yml',
      'azure-pipelines-main.yaml',
    ],
  },
  'babel': {
    fileNames: [
      '.babelrc',
      '.babelrc.cjs',
      '.babelrc.js',
      '.babelrc.mjs',
      '.babelrc.json',
      'babel.config.cjs',
      'babel.config.js',
      'babel.config.mjs',
      'babel.config.json',
      'babel-transform.js',
      '.babel-plugin-macrosrc',
      '.babel-plugin-macrosrc.json',
      '.babel-plugin-macrosrc.yaml',
      '.babel-plugin-macrosrc.yml',
      '.babel-plugin-macrosrc.js',
      'babel-plugin-macros.config.js',
    ],
  },
  'bash': {
    languageIds: [
      'awk',
      'shellscript',
    ],
    fileExtensions: [
      'sh',
      'ksh',
      'csh',
      'tcsh',
      'zsh',
      'bash',
      'awk',
      'fish',
    ],
    fileNames: [
      'applypatch-msg',
      'pre-applypatch',
      'post-applypatch',
      'pre-commit',
      'prepare-commit-message',
      'commit-msg',
      'post-commit',
      'pre-rebase',
      'post-checkout',
      'post-merge',
      'pre-receive',
      'update',
      'post-receive',
      'post-update',
      'pre-auto-gc',
      'post-rewrite',
      'pre-push',
    ],
  },
  'batch': {
    languageIds: ['bat'],
    fileExtensions: [
      'bat',
      'cmd',
    ],
  },
  'bazel': {
    fileExtensions: ['bzl', 'bazel'],
    fileNames: ['.bazelrc'],
  },
  'benchmark': {
    fileNames: [
      'benchmark.md',
      'benchmark.rst',
      'benchmark.txt',
      'benchmarks.md',
      'benchmarks.rst',
      'benchmarks.txt',
    ],
  },
  'binary': {
    languageIds: ['code-text-binary'],
    fileExtensions: ['bin'],
  },
  'biome': {
    fileNames: ['biome.json', 'biome.jsonc'],
  },
  'bitbucket': {
    fileNames: [
      'bitbucket-pipelines.yaml',
      'bitbucket-pipelines.yml',
    ],
  },
  'blitz': {
    fileNames: [
      'blitz.config.js',
      'blitz.config.ts',
      '.blitz.config.compiled.js',
    ],
  },
  'bower': {
    fileNames: [
      '.bowerrc',
      'bower.json',
    ],
  },
  'browserslist': {
    fileNames: [
      'browserslist',
      '.browserslistrc',
    ],
  },
  'bun-lock': {
    fileNames: ['bun.lockb'],
  },
  'bun': {
    fileNames: ['bunfig.toml'],
  },
  'c-header': {
    fileExtensions: ['h'],
  },
  'c': {
    languageIds: ['c'],
    fileExtensions: [
      'c',
      'i',
      'mi',
    ],
  },
  'caddy': {
    fileExtensions: ['caddyfile'],
    fileNames: ['caddyfile'],
  },
  'capacitor': {
    fileNames: [
      'capacitor.config.json',
      'capacitor.config.ts',
    ],
  },
  'cargo-lock': {
    fileNames: ['cargo.lock'],
  },
  'cargo': {
    fileNames: ['cargo.toml'],
  },
  'certificate': {
    fileExtensions: [
      'cer',
      'cert',
      'crt',
      'pfx',
    ],
  },
  'changelog': {
    fileNames: [
      'changelog',
      'changelog.md',
      'changelog.rst',
      'changelog.txt',
      'changes',
      'changes.md',
      'changes.rst',
      'changes.txt',
    ],
  },
  'circle-ci': {
    fileNames: ['circle.yml'],
  },
  'clojure': {
    languageIds: ['clojure'],
    fileExtensions: [
      'clj',
      'cljs',
      'cljc',
    ],
  },
  'cmake': {
    fileExtensions: ['cmake'],
    fileNames: [
      'cmakelists.txt',
      'cmakecache.txt',
    ],
  },
  'cobol': {
    languageIds: ['cobol'],
    fileExtensions: [
      'cob',
      'cbl',
    ],
  },
  'code-climate': {
    fileNames: ['.codeclimate.yml'],
  },
  'code-of-conduct': {
    fileNames: [
      'code_of_conduct.md',
      'code_of_conduct.txt',
      'code_of_conduct',
    ],
  },
  'codeowners': {
    fileNames: ['codeowners', 'owners'],
  },
  'coffeescript': {
    languageIds: ['coffeescript'],
    fileExtensions: [
      'coffee',
      'cson',
      'iced',
    ],
  },
  'commitlint': {
    fileNames: [
      '.commitlintrc',
      '.commitlintrc.js',
      '.commitlintrc.cjs',
      '.commitlintrc.ts',
      '.commitlintrc.cts',
      '.commitlintrc.json',
      '.commitlintrc.yaml',
      '.commitlintrc.yml',
      '.commitlint.yaml',
      '.commitlint.yml',
      'commitlint.config.js',
      'commitlint.config.cjs',
      'commitlint.config.ts',
      'commitlint.config.cts',
    ],
  },
  'contributing': {
    fileNames: [
      'contributing.md',
      'contributing.rst',
      'contributing.txt',
      'contributing',
    ],
  },
  'cpp-header': {
    fileExtensions: [
      'hh',
      'hpp',
      'hxx',
      'h++',
      'hp',
      'tcc',
      'inl',
    ],
  },
  'cpp': {
    languageIds: ['cpp'],
    fileExtensions: [
      'cc',
      'cpp',
      'cxx',
      'c++',
      'cp',
      'mii',
      'ii',
    ],
  },
  'csharp': {
    languageIds: ['csharp'],
    fileExtensions: [
      'cs',
      'csx',
      'csharp',
    ],
  },
  'cspell': {
    fileNames: [
      'cspell.json',
      'cspell.yml',
      'cspell.yaml',
      '.cspell.json',
      '.cspell.yml',
      '.cspell.yaml',
      'cspell.config.js',
      'cspell.config.cjs',
      'cspell.config.yml',
      'cspell.config.yaml',
    ],
  },
  'css-map': {
    fileExtensions: ['css.map'],
  },
  'css': {
    languageIds: ['css'],
    fileExtensions: ['css'],
  },
  'csv': {
    languageIds: [
      'csv',
      'tsv',
      'psv',

    ],
    fileExtensions: [
      'csv',
      'tsv',
      'psv',
    ],
  },
  'cucumber': {
    languageIds: ['cucumber'],
    fileExtensions: [
      'feature',
      'features',
    ],
  },
  'cuda': {
    languageIds: ['cuda-cpp'],
    fileExtensions: [
      'cu',
      'cuh',
    ],
  },
  'cypress': {
    fileNames: [
      'cypress.json',
      'cypress.env.json',
      'cypress.config.ts',
      'cypress.config.js',
      'cypress.config.cjs',
      'cypress.config.mjs',
    ],
  },
  'd': {
    languageIds: ['d'],
    fileExtensions: ['d', 'di'],
  },
  'dart-generated': {
    fileExtensions: [
      'freezed.dart',
      'g.dart',
    ],
  },
  'dart': {
    languageIds: ['dart'],
    fileExtensions: ['dart'],
  },
  'database': {
    languageIds: ['sql'],
    fileExtensions: [
      'pdb',
      'sql',
      'pks',
      'pkb',
      'accdb',
      'mdb',
      'sqlite',
      'sqlite3',
      'pgsql',
      'postgres',
      'plpgsql',
      'psql',
      'db',
      'db3',
      'dat',
    ],
  },
  'deno_lock': {
    fileNames: ['deno.lock'],
  },
  'deno': {
    fileNames: [
      'deno.json',
      'deno.jsonc',
    ],
  },
  'dependabot': {
    fileNames: [
      'dependabot.yml',
      'dependabot.yaml',
    ],
  },
  'devcontainer': {
    fileNames: [
      'devcontainer.json',
      '.devcontainer.json',
    ],
  },
  'dhall': {
    languageIds: ['dhall'],
    fileExtensions: [
      'dhall',
      'dhallb',
    ],
  },
  'diff': {
    languageIds: ['diff'],
  },
  'django': {
    languageIds: [
      'django-html',
      'django-txt',
    ],
    fileExtensions: ['djt'],
  },
  'docker-compose': {
    fileExtensions: [
      'docker-compose.yml',
      'docker-compose.yaml',

      'compose.yaml',
      'compose.yml',
    ],
    fileNames: [
      'docker-compose.yml',
      'docker-compose.override.yml',
      'docker-compose.prod.yml',
      'docker-compose.production.yml',
      'docker-compose.alpha.yml',
      'docker-compose.beta.yml',
      'docker-compose.stage.yml',
      'docker-compose.staging.yml',
      'docker-compose.dev.yml',
      'docker-compose.development.yml',
      'docker-compose.local.yml',
      'docker-compose.test.yml',
      'docker-compose.testing.yml',
      'docker-compose.ci.yml',
      'docker-compose.web.yml',
      'docker-compose.worker.yml',

      'docker-compose.yaml',
      'docker-compose.override.yaml',
      'docker-compose.prod.yaml',
      'docker-compose.production.yaml',
      'docker-compose.alpha.yaml',
      'docker-compose.beta.yaml',
      'docker-compose.stage.yaml',
      'docker-compose.staging.yaml',
      'docker-compose.dev.yaml',
      'docker-compose.development.yaml',
      'docker-compose.local.yaml',
      'docker-compose.test.yaml',
      'docker-compose.testing.yaml',
      'docker-compose.ci.yaml',
      'docker-compose.web.yaml',
      'docker-compose.worker.yaml',

      'compose.yaml',
      'compose.override.yaml',
      'compose.prod.yaml',
      'compose.production.yaml',
      'compose.alpha.yaml',
      'compose.beta.yaml',
      'compose.stage.yaml',
      'compose.staging.yaml',
      'compose.dev.yaml',
      'compose.development.yaml',
      'compose.local.yaml',
      'compose.test.yaml',
      'compose.testing.yaml',
      'compose.ci.yaml',
      'compose.web.yaml',
      'compose.worker.yaml',

      'compose.yml',
      'compose.override.yml',
      'compose.prod.yml',
      'compose.production.yml',
      'compose.alpha.yml',
      'compose.beta.yml',
      'compose.stage.yml',
      'compose.staging.yml',
      'compose.dev.yml',
      'compose.development.yml',
      'compose.local.yml',
      'compose.test.yml',
      'compose.testing.yml',
      'compose.ci.yml',
      'compose.web.yml',
      'compose.worker.yml',
    ],
  },
  'docker-ignore': {
    fileExtensions: [
      'dockerignore',
      'containerignore',
    ],
  },
  'docker': {
    fileExtensions: [
      'dockerfile',
      'containerfile',
    ],
    fileNames: [
      'dockerfile',
      'dockerfile.prod',
      'dockerfile.production',
      'dockerfile.alpha',
      'dockerfile.beta',
      'dockerfile.stage',
      'dockerfile.staging',
      'dockerfile.dev',
      'dockerfile.development',
      'dockerfile.local',
      'dockerfile.test',
      'dockerfile.testing',
      'dockerfile.ci',
      'dockerfile.web',
      'dockerfile.worker',

      'containerfile',
      'containerfile.prod',
      'containerfile.production',
      'containerfile.alpha',
      'containerfile.beta',
      'containerfile.stage',
      'containerfile.staging',
      'containerfile.dev',
      'containerfile.development',
      'containerfile.local',
      'containerfile.test',
      'containerfile.testing',
      'containerfile.ci',
      'containerfile.web',
      'containerfile.worker',
    ],
  },
  'drawio': {
    fileExtensions: [
      'drawio',
      'dio',
    ],
  },
  'dub-selections': {
    fileNames: ['dub.selections.json'],
  },
  'dub': {
    fileNames: ['dub.json', 'dub.sdl'],
  },
  'editorconfig': {
    languageIds: ['editorconfig'],
    fileNames: ['.editorconfig'],
  },
  'ejs': {
    fileExtensions: ['ejs'],
  },
  'eleventy': {
    fileNames: [
      '.eleventy.js',
      'eleventy.config.js',
      'eleventy.config.mjs',
      'eleventy.config.cjs',
      '.eleventyignore',
    ],
  },
  'elixir': {
    languageIds: ['elixir'],
    fileExtensions: [
      'ex',
      'exs',
      'eex',
      'leex',
      'heex',
    ],
  },
  'elm': {
    languageIds: ['elm'],
    fileExtensions: ['elm'],
  },
  'ember': {
    fileNames: [
      '.ember-cli',
      '.ember-cli.js',
      'ember-cli-builds.js',
    ],
  },
  'env': {
    fileExtensions: ['env'],
    fileNames: [
      '.env.defaults',
      '.env.example',
      '.env.sample',
      '.env.template',
      '.env.schema',
      '.env.local',
      '.env.dev',
      '.env.development',
      '.env.alpha',
      '.env.e2e',
      '.env.qa',
      '.env.dist',
      '.env.prod',
      '.env.production',
      '.env.stage',
      '.env.staging',
      '.env.preview',
      '.env.test',
      '.env.testing',
      '.env.development.local',
      '.env.qa.local',
      '.env.production.local',
      '.env.staging.local',
      '.env.test.local',
      '.env.uat',
      '.env.cat',
    ],
  },
  'envrc': {
    fileNames: ['.envrc'],
  },
  'erlang': {
    languageIds: ['erlang'],
    fileExtensions: ['erl'],
  },
  'esbuild': {
    fileNames: [
      'esbuild.js',
      'esbuild.ts',
      'esbuild.cjs',
      'esbuild.mjs',
      'esbuild.config.js',
      'esbuild.config.ts',
      'esbuild.config.cjs',
      'esbuild.config.mjs',
    ],
  },
  'eslint-ignore': {
    fileNames: [
      '.eslintignore',
      '.eslintcache,',
    ],
  },
  'eslint': {
    fileNames: [
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.json',
      '.eslintrc-md.js',
      '.eslintrc-jsdoc.js',
      '.eslintrc',

      'eslint.config.js',
      'eslint.config.cjs',
      'eslint.config.mjs',
      'eslint.config.ts',
      'eslint.config.cts',
      'eslint.config.mts',
    ],
  },
  'exe': {
    fileExtensions: [
      'exe',
      'msi',
    ],
  },
  'fastlane': {
    fileNames: [
      'fastfile',
      'appfile',
      'snapfile',
      'matchfile',
      'deliverfile',
      'scanfile',
      'gymfile',
    ],
  },
  'favicon': {
    fileNames: ['favicon.ico'],
  },
  'figma': {
    fileExtensions: ['fig'],
  },
  'firebase': {
    fileNames: [
      'firebase.json',
      '.firebaserc',
      'firestore.rules',
      'firestore.indexes.json',
    ],
  },
  'flutter': {
    fileNames: [
      '.flutter-plugins',
      '.flutter-plugins-dependencies',
      '.metadata',
    ],
  },
  'font': {
    fileExtensions: [
      'woff',
      'woff2',
      'ttf',
      'eot',
      'suit',
      'otf',
      'bmap',
      'fnt',
      'odttf',
      'ttc',
      'font',
      'fonts',
      'sui',
      'ntf',
      'mrf',
    ],
  },
  'fortran': {
    fileExtensions: [
      'f',
      'f77',
      'f90',
      'f95',
      'f03',
      'f08',
    ],
  },
  'fsharp': {
    languageIds: ['fsharp'],
    fileExtensions: [
      'fs',
      'fsx',
      'fsi',
      'fsproj',
    ],
  },
  'gatsby': {
    fileNames: [
      'gatsby-config.js',
      'gatsby-config.mjs',
      'gatsby-config.ts',
      'gatsby-node.js',
      'gatsby-node.mjs',
      'gatsby-node.ts',
      'gatsby-browser.js',
      'gatsby-browser.tsx',
      'gatsby-ssr.js',
      'gatsby-ssr.tsx',
    ],
  },
  'gcp': {
    fileNames: [
      'release-please-config.json',
      '.release-please-manifest.json',
    ],
  },
  'git-cliff': {
    fileNames: ['cliff.toml'],
  },
  'git': {
    languageIds: [
      'git',
      'git-commit',
      'git-rebase',
      'ignore',
    ],
    fileExtensions: ['patch'],
    fileNames: [
      '.git',
      '.gitignore',
      '.gitmessage',
      '.gitignore-global',
      '.gitignore_global',
      '.gitattributes',
      '.gitattributes-global',
      '.gitattributes_global',
      '.gitconfig',
      '.gitmodules',
      '.gitkeep',
      '.keep',
      '.gitpreserve',
      '.gitinclude',
      '.git-blame-ignore',
      '.git-blame-ignore-revs',
      '.git-for-windows-updater',
      'git-history',
    ],
  },
  'gitlab': {
    fileExtensions: ['gitlab-ci.yml'],
  },
  'gitpod': {
    fileNames: ['.gitpod.yml'],
  },
  'gleam-config': {
    fileNames: ['gleam.toml'],
  },
  'gleam': {
    fileExtensions: ['gleam'],
    languageIds: ['gleam'],
  },
  'go-mod': {
    fileNames: [
      'go.mod',
      'go.sum',
      'go.work',
      'go.work.sum',
    ],
  },
  'go-template': {
    fileExtensions: [
      'tmpl',
      'templ',
      'gotmpl',
      'gohtml',
      'go.tmp',
      'go.html',
    ],
  },
  'go': {
    languageIds: ['go'],
    fileExtensions: ['go'],
  },
  'godot-assets': {
    fileExtensions: [
      'godot',
      'tres',
      'tscn',
      'gdns',
      'gdnlib',
      'gdshader',
      'gdshaderinc',
      'gdextension',
    ],
    fileNames: [
      '.gdignore',
      '._sc_',
      '_sc_',
    ],
  },
  'godot': {
    languageIds: ['gdscript'],
    fileExtensions: ['gd'],
  },
  'gradle': {
    fileExtensions: ['gradle'],
    fileNames: [
      'gradle.properties',
      'gradlew',
      'gradle-wrapper.properties',
    ],
  },
  'graphql': {
    languageIds: ['graphql'],
    fileExtensions: [
      'graphql',
      'gql',
    ],
    fileNames: [
      '.graphqlconfig',
      '.graphqlrc',
      '.graphqlrc.json',
      '.graphqlrc.js',
      '.graphqlrc.cjs',
      '.graphqlrc.ts',
      '.graphqlrc.toml',
      '.graphqlrc.yaml',
      '.graphqlrc.yml',
      'graphql.config.json',
      'graphql.config.js',
      'graphql.config.cjs',
      'graphql.config.ts',
      'graphql.config.toml',
      'graphql.config.yaml',
      'graphql.config.yml',
    ],
  },
  'groovy': {
    languageIds: ['groovy'],
    fileExtensions: ['groovy'],
  },
  'gulp': {
    fileNames: [
      'gulpfile.js',
      'gulpfile.mjs',
      'gulpfile.ts',
      'gulpfile.cts',
      'gulpfile.mts',
      'gulpfile.babel.js',
    ],
  },
  'haml': {
    languageIds: ['haml'],
    fileExtensions: ['haml'],
  },
  'handlebars': {
    languageIds: ['handlebars'],
    fileExtensions: [
      'hbs',
      'mustache',
    ],
  },
  'hardhat': {
    fileNames: [
      'hardhat.config.js',
      'hardhat.config.ts',
    ],
  },
  'haskell': {
    languageIds: ['haskell'],
    fileExtensions: ['hs'],
  },
  'haxe': {
    languageIds: [
      'haxe',
      'hxml',
    ],
    fileExtensions: ['hx'],
  },
  'helm': {
    fileNames: [
      '.helmignore',
      'chart.lock',
    ],
  },
  'heroku': {
    fileNames: ['procfile'],
  },
  'histoire': {
    fileNames: [
      'histoire.config.ts',
      'histoire.config.js',
      '.histoire.js',
      '.histoire.ts',
    ],
  },
  'html': {
    languageIds: ['html'],
    fileExtensions: [
      'htm',
      'html',
      'xhtml',
      'html_vm',
      'asp',
    ],
  },
  'http': {
    fileExtensions: [
      'http',
      'rest',
    ],
    fileNames: ['CNAME'],
  },
  'huff': {
    fileExtensions: ['huff'],
  },
  'hugo': {
    fileNames: [
      'hugo.toml',
      'hugo.yaml',
      'hugo.json',
    ],
  },
  'humans': {
    fileNames: ['humans.txt'],
  },
  'husky': {
    fileNames: [
      '.huskyrc',
      'husky.config.js',
      '.huskyrc.json',
      '.huskyrc.js',
      '.huskyrc.yaml',
      '.huskyrc.yml',
    ],
  },
  'image': {
    fileExtensions: [
      'png',
      'jpeg',
      'jpg',
      'gif',
      'ico',
      'tif',
      'tiff',
      'psd',
      'psb',
      'ami',
      'apx',
      'avif',
      'bmp',
      'bpg',
      'brk',
      'cur',
      'dds',
      'dng',
      'exr',
      'fpx',
      'gbr',
      'img',
      'jbig2',
      'jb2',
      'jng',
      'jxr',
      'pgf',
      'pic',
      'raw',
      'webp',
      'eps',
      'afphoto',
      'ase',
      'aseprite',
      'clip',
      'cpt',
      'heif',
      'heic',
      'kra',
      'mdp',
      'ora',
      'pdn',
      'reb',
      'sai',
      'tga',
      'xcf',
      'jfif',
      'ppm',
      'pbm',
      'pgm',
      'pnm',
      'icns',
    ],
  },
  'ionic': {
    fileNames: [
      'ionic.config.json',
      '.io-config.json',
    ],
  },
  'java-class': {
    fileExtensions: ['class'],
  },
  'java-jar': {
    fileExtensions: ['jar'],
  },
  'java': {
    languageIds: ['java'],
    fileExtensions: [
      'java',
      'jsp',
    ],
  },
  'javascript-config': {
    fileNames: ['jsconfig.json'],
    fileExtensions: ['jsconfig.json'],
  },
  'javascript-map': {
    fileExtensions: [
      'js.map',
      'mjs.map',
      'cjs.map',
    ],
  },
  'javascript-react': {
    languageIds: ['javascriptreact'],
    fileExtensions: ['jsx'],
  },
  'javascript-test': {
    fileExtensions: [
      'spec.js',
      'spec.cjs',
      'spec.mjs',
      'e2e-spec.js',
      'e2e-spec.cjs',
      'e2e-spec.mjs',
      'test.js',
      'test.cjs',
      'test.mjs',
      'js.snap',
      'cy.js',

      'spec.jsx',
      'test.jsx',
      'jsx.snap',
      'cy.jsx',
    ],
  },
  'javascript': {
    languageIds: ['javascript'],
    fileExtensions: [
      'esx',
      'js',
      'cjs',
      'mjs',
    ],
  },
  'jest': {
    fileNames: [
      'jest.config.js',
      'jest.config.cjs',
      'jest.config.mjs',
      'jest.config.ts',
      'jest.config.cts',
      'jest.config.mts',
      'jest.config.json',
      'jest.e2e.config.js',
      'jest.e2e.config.cjs',
      'jest.e2e.config.mjs',
      'jest.e2e.config.ts',
      'jest.e2e.config.cts',
      'jest.e2e.config.mts',
      'jest.e2e.config.json',
      'jest.e2e.json',
      'jest-unit.config.js',
      'jest-e2e.config.js',
      'jest-e2e.config.cjs',
      'jest-e2e.config.mjs',
      'jest-e2e.config.ts',
      'jest-e2e.config.cts',
      'jest-e2e.config.mts',
      'jest-e2e.config.json',
      'jest-e2e.json',
      'jest-github-actions-reporter.js',
      'jest.setup.js',
      'jest.setup.ts',
      'jest.json',
      '.jestrc',
      '.jestrc.js',
      '.jestrc.json',
      'jest.teardown.js',
      'jest-preset.json',
      'jest-preset.js',
      'jest-preset.cjs',
      'jest-preset.mjs',
      'jest.preset.js',
      'jest.preset.mjs',
      'jest.preset.cjs',
      'jest.preset.json',
    ],
  },
  'jinja': {
    languageIds: ['jinja'],
    fileExtensions: [
      'jinja',
      'jinja2',
      'j2',
      'jinja-html',
    ],
  },
  'json-schema': {
    fileExtensions: ['schema.json'],
  },
  'json': {
    languageIds: ['hjson'],
    fileExtensions: [
      'json',
      'jsonc',
      'tsbuildinfo',
      'json5',
      'jsonl',
      'ndjson',
      'hjson',
      'webmanifest',
    ],
    fileNames: [
      '.jscsrc',
      '.jshintrc',
      'composer.lock',
      '.jsbeautifyrc',
      '.esformatter',
      'cdp.pid',
      '.lintstagedrc',
      '.whitesource',
    ],
  },
  'juce': {
    fileExtensions: ['jucer'],
  },
  'julia': {
    languageIds: ['julia'],
    fileExtensions: ['jl'],
  },
  'jupyter': {
    languageIds: ['jupyter'],
    fileExtensions: ['ipynb'],
  },
  'just': {
    fileExtensions: ['just'],
    fileNames: ['justfile', '.justfile'],
  },
  'kdl': {
    languageIds: ['kdl'],
    fileExtensions: ['kdl'],
  },
  'key': {
    fileExtensions: [
      'pub',
      'key',
      'pem',
      'asc',
      'gpg',
      'passwd',
      'keystore',
    ],
    fileNames: ['.htpasswd'],
  },
  'kotlin': {
    fileExtensions: [
      'kt',
      'kts',
    ],
  },
  'laravel': {
    fileExtensions: [
      'blade.php',
      'inky.php',
    ],
    fileNames: ['artisan'],
  },
  'latex': {
    languageIds: [
      'tex',
      'doctex',
      'latex',
      'latex-expl3',
    ],
    fileExtensions: [
      'tex',
      'sty',
      'dtx',
      'ltx',
    ],
  },
  'latte': {
    fileExtensions: ['latte'],
  },
  'lerna': {
    fileNames: ['lerna.json'],
  },
  'less': {
    languageIds: ['less'],
    fileExtensions: ['less'],
  },
  'lib': {
    languageIds: [
      'bibtex',
      'bibtex-style',
    ],
    fileExtensions: [
      'lib',
      'bib',
    ],
  },
  'license': {
    fileNames: [
      'copying',
      'copying.md',
      'copying.rst',
      'copying.txt',
      'copyright',
      'copyright.md',
      'copyright.rst',
      'copyright.txt',
      'license',
      'license-agpl',
      'license-apache',
      'license-bsd',
      'license-mit',
      'license-gpl',
      'license-lgpl',
      'license.md',
      'license.rst',
      'license.txt',
      'licence',
      'licence-agpl',
      'licence-apache',
      'licence-bsd',
      'licence-mit',
      'licence-gpl',
      'licence-lgpl',
      'licence.md',
      'licence.rst',
      'licence.txt',
    ],
  },
  'lint-staged': {
    fileNames: [
      '.lintstagedrc',
      '.lintstagedrc.json',
      '.lintstagedrc.yaml',
      '.lintstagedrc.yml',
      '.lintstagedrc.mjs',
      '.lintstagedrc.cjs',
      '.lintstagedrc.js',
      'lint-staged.config.js',
      'lint-staged.config.mjs',
      'lint-staged.config.cjs',
    ],
  },
  'liquid': {
    fileExtensions: ['liquid'],
    fileNames: ['.liquidrc.json', '.liquidrc'],
    languageIds: ['liquid'],
  },
  'lisp': {
    fileExtensions: [
      'lisp',
      'lsp',
      'cl',
      'fast',
    ],
  },
  'log': {
    languageIds: ['log'],
    fileExtensions: ['log'],
  },
  'lua': {
    languageIds: ['lua'],
    fileExtensions: ['lua'],
    fileNames: ['.luacheckrc'],
  },
  'luau': {
    fileExtensions: ['luau'],
    fileNames: ['.luaurc'],
  },
  'makefile': {
    languageIds: ['makefile'],
    fileExtensions: ['mk'],
    fileNames: [
      'makefile',
      'gnumakefile',
      'kbuild',
    ],
  },
  'markdown-mdx': {
    fileExtensions: ['mdx'],
  },
  'markdown': {
    languageIds: ['markdown'],
    fileExtensions: [
      'md',
      'markdown',
      'rst',
    ],
  },
  'marko': {
    fileExtensions: ['marko'],
  },
  'matlab': {
    languageIds: ['matlab'],
  },
  'mdbook': {
    fileNames: ['book.toml'],
  },
  'mermaid': {
    fileExtensions: [
      'mmd',
      'mermaid',
    ],
  },
  'meson': {
    fileNames: [
      'meson.build',
      'meson_options.txt',
    ],
    fileExtensions: ['wrap'],
  },
  'midi': {
    fileNames: ['mid', 'midi'],
  },
  'mjml': {
    fileExtensions: ['mjml'],
    fileNames: ['.mjmlconfig'],
  },
  'modernizr': {
    fileNames: [
      '.modernizrrc',
      '.modernizrrc.js',
      '.modernizrrc.json',
    ],
  },
  'ms-excel': {
    fileExtensions: [
      'xlsx',
      'xlsm',
      'xls',
    ],
  },
  'ms-powerpoint': {
    fileExtensions: [
      'pptx',
      'ppt',
      'pptm',
      'potx',
      'potm',
      'ppsx',
      'ppsm',
      'pps',
      'ppam',
      'ppa',
      'odp',
    ],
  },
  'ms-word': {
    fileExtensions: [
      'doc',
      'docx',
      'rtf',
      'odt',
    ],
  },
  'nativescript': {
    fileNames: [
      'nativescript.config.ts',
      'nativescript.config.js',
    ],
  },
  'nest': {
    fileNames: [
      'nest-cli.json',
      '.nest-cli.json',
      'nestconfig.json',
      '.nestconfig.json',
    ],
  },
  'netlify': {
    fileNames: [
      'netlify.json',
      'netlify.yml',
      'netlify.yaml',
      'netlify.toml',
    ],
  },
  'next': {
    fileNames: [
      'next.config.js',
      'next.config.mjs',
      'next.config.ts',
      'next.config.mts',
    ],
  },
  'nextflow': {
    fileExtensions: ['nf'],
  },
  'nginx': {
    fileNames: ['nginx.conf'],
    fileExtensions: [
      'nginx',
      'nginxconf',
      'nginxconfig',
    ],
  },
  'nim': {
    languageIds: [
      'nim',
      'nimble',
    ],
    fileExtensions: [
      'nim',
      'nimble',
    ],
  },
  'ninja': {
    fileExtensions: ['ninja'],
  },
  'nix-lock': {
    fileNames: ['flake.lock'],
  },
  'nix': {
    languageIds: ['nix'],
    fileExtensions: ['nix'],
  },
  'nodemon': {
    fileNames: [
      'nodemon.json',
      'nodemon-debug.json',
    ],
  },
  'npm-ignore': {
    fileNames: ['.npmignore'],
  },
  'npm-lock': {
    fileNames: ['package-lock.json'],
  },
  'npm': {
    fileNames: ['.npmrc'],
  },
  'nuget': {
    fileNames: [
      'nuget.config',
      '.nuspec',
      'nuget.exe',
    ],
    fileExtensions: ['nupkg'],
  },
  'nunjucks': {
    languageIds: ['nunjucks'],
    fileExtensions: [
      'njk',
      'nunjucks',
    ],
  },
  'nuxt-ignore': {
    fileNames: ['.nuxtignore'],
  },
  'nuxt': {
    fileNames: [
      '.nuxtrc',
      'nuxt.config.js',
      'nuxt.config.ts',
    ],
  },
  'ocaml': {
    fileExtensions: [
      'ml',
      'mli',
      'cmx',
    ],
  },
  'org': {
    languageIds: ['org'],
    fileExtensions: ['org'],
  },
  'package-json': {
    fileNames: [
      'package.json',
      '.nvmrc',
      '.esmrc',
      '.node-version',
    ],
  },
  'panda-css': {
    fileNames: [
      'panda.config.ts',
      'panda.config.js',
      'panda.config.mjs',
      'panda.config.mts',
      'panda.config.cjs',
    ],
  },
  'pdf': {
    fileExtensions: ['pdf'],
  },
  'perl': {
    languageIds: [
      'perl',
      'perl6',
      'raku',
    ],
    fileExtensions: [
      'pl',
      'pm',
      'pod',
      't',
      'psgi',
      'raku',
      'rakumod',
      'rakutest',
      'rakudoc',
      'nqp',
      'p6',
      'pl6',
      'pm6',
    ],
  },
  'php': {
    languageIds: ['php'],
    fileExtensions: ['php'],
  },
  'phrase': {
    fileNames: [
      '.phrase.yml',
      '.phraseapp.yml',
      '.phrase.yaml',
      '.phraseapp.yaml',
    ],
  },
  'phtml': {
    fileExtensions: ['phtml'],
  },
  'pixi-lock': {
    fileNames: ['pixi.lock'],
  },
  'pixi': {
    fileNames: ['pixi.toml'],
  },
  'plantuml': {
    fileExtensions: ['pu', 'puml', 'plantuml'],
  },
  'playwright': {
    fileNames: [
      'playwright.config.js',
      'playwright.config.mjs',
      'playwright.config.ts',
      'playwright.config.base.js',
      'playwright.config.base.mjs',
      'playwright.config.base.ts',
      'playwright-ct.config.js',
      'playwright-ct.config.mjs',
      'playwright-ct.config.ts',
    ],
  },
  'plop': {
    fileNames: [
      'plopfile.js',
      'plopfile.cjs',
      'plopfile.mjs',
      'plopfile.ts',
    ],
  },
  'pnpm-lock': {
    fileNames: ['pnpm-lock.yaml'],
  },
  'pnpm': {
    fileNames: [
      'pnpm-workspace.yaml',
      '.pnpmfile.cjs',
    ],
  },
  'poetry-lock': {
    fileNames: ['poetry.lock'],
  },
  'postcss': {
    languageIds: ['postcss'],
    fileExtensions: [
      'pcss',
      'sss',
    ],
    fileNames: [
      'postcss.config.js',
      'postcss.config.cjs',
      'postcss.config.mjs',
      'postcss.config.ts',
      'postcss.config.cts',
      'postcss.config.mts',
      '.postcssrc.js',
      '.postcssrc.cjs',
      '.postcssrc.ts',
      '.postcssrc.cts',
      '.postcssrc',
      '.postcssrc.json',
      '.postcssrc.yaml',
      '.postcssrc.yml',
    ],
  },
  'powershell': {
    languageIds: ['powershell'],
    fileExtensions: [
      'ps1',
      'psm1',
      'psd1',
      'ps1xml',
      'psc1',
      'pssc',
    ],
  },
  'pre-commit': {
    fileNames: [
      '.pre-commit-config.yaml',
      '.pre-commit-hooks.yaml',
    ],
  },
  'premake': {
    fileNames: [
      'premake4.lua',
      'premake5.lua',
      'premake.lua',
    ],
  },
  'prettier-ignore': {
    fileNames: ['.prettierignore'],
  },
  'prettier': {
    fileNames: [
      '.prettierrc',
      'prettier.config.js',
      'prettier.config.cjs',
      '.prettierrc.js',
      '.prettierrc.cjs',
      '.prettierrc.json',
      '.prettierrc.json5',
      '.prettierrc.yaml',
      '.prettierrc.yml',
      '.prettierrc.toml',
      'prettier.config.mjs',
      '.prettierrc.mjs',
    ],
  },
  'prisma': {
    fileNames: ['prisma.yml'],
    fileExtensions: ['prisma'],
  },
  'prolog': {
    languageIds: ['prolog'],
    fileExtensions: [
      'p',
      'pro',
    ],
  },
  'properties': {
    languageIds: [
      'ini',
      'properties',
      'spring-boot-properties',
    ],
    fileExtensions: [
      'ini',
      'dlc',
      'config',
      'conf',
      'properties',
      'prop',
      'settings',
      'option',
      'props',
      'prefs',
      'sln.dotsettings',
      'sln.dotsettings.user',
      'cfg',
    ],
  },
  'proto': {
    languageIds: ['proto'],
    fileExtensions: ['proto'],
  },
  'pug': {
    languageIds: ['jade'],
    fileExtensions: [
      'jade',
      'pug',
    ],
    fileNames: [
      '.pug-lintrc',
      '.pug-lintrc.js',
      '.pug-lintrc.json',
    ],
  },
  'puppeteer': {
    fileNames: [
      '.puppeteerrc.cjs,',
      '.puppeteerrc.js,',
      '.puppeteerrc',
      '.puppeteerrc.json,',
      '.puppeteerrc.yaml,',
      'puppeteer.config.js',
      'puppeteer.config.cjs',
    ],
  },
  'python-compiled': {
    fileExtensions: [
      'pyc',
      'pyo',
      'pyd',
    ],
  },
  'python-config': {
    fileNames: [
      'pyproject.toml',
      'requirements.txt',
      '.python-version',
    ],
  },
  'python': {
    languageIds: ['python'],
    fileExtensions: ['py'],
  },
  'r': {
    languageIds: [
      'r',
      'rsweave',
    ],
    fileExtensions: [
      'r',
      'rmd',
    ],
    fileNames: ['.Rhistory'],
  },
  'racket': {
    fileExtensions: ['rkt'],
  },
  'razor': {
    languageIds: [
      'razor',
      'aspnetcorerazor',
    ],
    fileExtensions: [
      'cshtml',
      'vbhtml',
    ],
  },
  'readme': {
    fileNames: [
      'readme.md',
      'readme.rst',
      'readme.txt',
      'readme',
    ],
  },
  'reason': {
    languageIds: [
      'reason',
      'reason_lisp',
    ],
    fileExtensions: [
      're',
      'rei',
    ],
  },
  'redwood': {
    fileNames: ['redwood.toml'],
  },
  'release': {
    fileNames: ['.goreleaser.yaml'],
  },
  'remix': {
    fileNames: [
      'remix.config.js',
      'remix.config.ts',
    ],
  },
  'renovate': {
    fileNames: [
      '.renovaterc',
      '.renovaterc.json',
      'renovate-config.json',
      'renovate.json',
      'renovate.json5',
    ],
  },
  'rescript': {
    languageIds: ['rescript'],
    fileExtensions: ['res'],
  },
  'roblox': {
    fileExtensions: ['rbxl', 'rbxlx', 'rbxm', 'rbxmx'],
  },
  'robots': {
    fileNames: ['robots.txt'],
  },
  'rollup': {
    fileNames: [
      'rollup.config.js',
      'rollup.config.mjs',
      'rollup.config.ts',
      'rollup-config.js',
      'rollup-config.mjs',
      'rollup-config.ts',
      'rollup.config.common.js',
      'rollup.config.common.mjs',
      'rollup.config.common.ts',
      'rollup.config.base.js',
      'rollup.config.base.mjs',
      'rollup.config.base.ts',
      'rollup.config.prod.js',
      'rollup.config.prod.mjs',
      'rollup.config.prod.ts',
      'rollup.config.dev.js',
      'rollup.config.dev.mjs',
      'rollup.config.dev.ts',
      'rollup.config.prod.vendor.js',
      'rollup.config.prod.vendor.mjs',
      'rollup.config.prod.vendor.ts',
    ],
  },
  'ruby-gem-lock': {
    fileNames: ['gemfile.lock'],
  },
  'ruby-gem': {
    fileNames: ['gemfile'],
  },
  'ruby': {
    languageIds: ['ruby'],
    fileExtensions: [
      'rb',
      'erb',
      'rbs',
    ],
    fileNames: ['.ruby-version'],
  },
  'ruff': {
    fileNames: ['ruff.toml', '.ruff.toml'],
  },
  'rust-config': {
    fileNames: [
      'rustfmt.toml',
      '.rustfmt.toml',
      'rust-toolchain.toml',
      'clippy.toml',
    ],
  },
  'rust': {
    languageIds: ['rust'],
    fileExtensions: [
      'rs',
      'ron',
    ],
  },
  'salesforce': {
    fileExtensions: ['cls'],
  },
  'sass': {
    languageIds: [
      'sass',
      'scss',
    ],
    fileExtensions: [
      'scss',
      'sass',
    ],
  },
  'scala': {
    languageIds: ['scala'],
    fileExtensions: [
      'scala',
      'sc',
    ],
  },
  'search': {
    languageIds: ['search-result'],
    fileExtensions: ['code-search'],
  },
  'security': {
    fileNames: [
      'security.md',
      'security.txt',
      'security',
    ],
  },
  'semantic-release': {
    fileNames: [
      '.releaserc',
      '.releaserc.yaml',
      '.releaserc.yml',
      '.releaserc.json',
      '.releaserc.js',
      '.releaserc.cjs',
      'release.config.js',
      'release.config.cjs',
    ],
  },
  'semgrep-ignore': {
    fileNames: ['.semgrepignore'],
  },
  'semgrep': {
    fileNames: ['semgrep.yml'],
  },
  'sentry': {
    fileNames: ['.sentryclirc'],
  },
  'serverless': {
    fileNames: [
      'serverless.yml',
      'serverless.yaml',
      'serverless.json',
      'serverless.js',
      'serverless.ts',
    ],
  },
  'shader': {
    languageIds: [
      'hlsl',
      'glsl',
      'wgsl',
    ],
    fileExtensions: [
      'glsl',
      'vert',
      'tesc',
      'tese',
      'geom',
      'frag',
      'comp',
      'vert.glsl',
      'tesc.glsl',
      'tese.glsl',
      'geom.glsl',
      'frag.glsl',
      'comp.glsl',
      'vertex.glsl',
      'geometry.glsl',
      'fragment.glsl',
      'compute.glsl',
      'ts.glsl',
      'gs.glsl',
      'vs.glsl',
      'fs.glsl',
      'shader',
      'vertexshader',
      'fragmentshader',
      'geometryshader',
      'computeshader',
      'hlsl',
      'pixel.hlsl',
      'geometry.hlsl',
      'compute.hlsl',
      'tessellation.hlsl',
      'px.hlsl',
      'geom.hlsl',
      'comp.hlsl',
      'tess.hlsl',
      'wgsl',
    ],
  },
  'sketch': {
    fileExtensions: ['sketch'],
  },
  'snowpack': {
    fileNames: [
      'snowpack.config.js',
      'snowpack.config.cjs',
      'snowpack.config.mjs',
      'snowpack.config.ts',
      'snowpack.config.cts',
      'snowpack.config.mts',
      'snowpack.deps.json',
      'snowpack.config.json',
    ],
  },
  'solidity': {
    languageIds: ['solidity'],
    fileExtensions: ['sol'],
  },
  'sonar-cloud': {
    fileNames: [
      'sonar-project.properties',
      '.sonarcloud.properties',
      'sonarcloud.yaml',
    ],
  },
  'spwn': {
    fileExtensions: ['spwn'],
  },
  'stackblitz': {
    fileNames: ['.stackblitzrc'],
  },
  'stata': {
    fileExtensions: ['ado', 'do', 'dta'],
  },
  'stencil': {
    fileNames: [
      'stencil.config.js',
      'stencil.config.ts',
    ],
  },
  'stitches': {
    fileNames: [
      'stitches.config.js',
      'stitches.config.ts',
    ],
  },
  'storybook-svelte': {
    fileExtensions: [
      'story.svelte',
      'stories.svelte',
    ],
  },
  'storybook-vue': {
    fileExtensions: [
      'story.vue',
      'stories.vue',
    ],
  },
  'storybook': {
    fileExtensions: [
      'stories.js',
      'stories.jsx',
      'stories.mdx',
      'story.js',
      'story.jsx',
      'stories.ts',
      'stories.tsx',
      'story.ts',
      'story.tsx',
      'story.mdx',
    ],
  },
  'stylelint-ignore': {
    fileNames: [
      '.stylelintignore',
      '.stylelintcache',
    ],
  },
  'stylelint': {
    fileNames: [
      '.stylelintrc',
      'stylelint.config.js',
      'stylelint.config.cjs',
      'stylelint.config.mjs',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.js',
      '.stylelintrc.cjs',
      '.stylelintrc.mjs',
    ],
  },
  'sublime': {
    fileExtensions: [
      'sublime-project',
      'sublime-workspace',
    ],
  },
  'super-collider': {
    fileExtensions: ['sc', 'scd'],
  },
  'svelte-config': {
    fileNames: [
      'svelte.config.js',
      'svelte.config.ts',
      'svelte.config.cjs',
      'svelte.config.mjs',
    ],
  },
  'svelte': {
    languageIds: ['svelte'],
    fileExtensions: ['svelte'],
  },
  'svg': {
    languageIds: ['svg'],
    fileExtensions: ['svg'],
  },
  'swift': {
    languageIds: ['swift'],
    fileExtensions: ['swift'],
  },
  'tailwind': {
    fileNames: [
      'tailwind.js',
      'tailwind.ts',
      'tailwind.config.js',
      'tailwind.config.cjs',
      'tailwind.config.mjs',
      'tailwind.config.ts',
      'tailwind.config.cts',
      'tailwind.config.mts',
    ],
  },
  'taskfile': {
    fileNames: [
      'taskfile.yml',
      'taskfile.yaml',
      'taskfile.dist.yml',
      'taskfile.yaml',
      'taskfile.dist.yaml',
    ],
  },
  'tauri-ignore': {
    fileNames: ['.taurignore'],
  },
  'tauri': {
    fileNames: [
      'tauri.conf.json',
      'tauri.conf.json5',
      'tauri.config.json',
      'tauri.linux.conf.json',
      'tauri.windows.conf.json',
      'tauri.macos.conf.json',
      'Tauri.toml',
    ],
    fileExtensions: ['tauri'],
  },
  'terraform': {
    languageIds: ['terraform'],
    fileExtensions: [
      'tf',
      'tf.json',
      'tfvars',
      'tfstate',
      'tfbackend',
    ],
  },
  'text': {
    languageIds: ['plaintext'],
    fileExtensions: ['txt'],
  },
  'todo': {
    fileExtensions: ['todo'],
    fileNames: [
      'todo.md',
      'todos.md',
    ],
  },
  'toml': {
    languageIds: ['toml'],
    fileExtensions: ['toml'],
  },
  'turbo': {
    fileNames: [
      'turbo.json',
    ],
  },
  'twig': {
    languageIds: ['twig'],
    fileExtensions: ['twig'],
  },
  'twine': {
    languageIds: [
      'twee3',
      'twee3-harlowe-3',
      'twee3-chapbook-1',
      'twee3-sugarcube-2',
    ],
    fileExtensions: [
      'tw',
      'twee',
    ],
  },
  'typescript-config': {
    fileNames: [
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.editor.json',
      'tsconfig.spec.json',
      'tsconfig.base.json',
      'tsconfig.build.json',
      'tsconfig.eslint.json',
      'tsconfig.lib.json',
      'tsconfig.lib.prod.json',
      'tsconfig.node.json',
      'tsconfig.test.json',
      'tsconfig.e2e.json',
      'tsconfig.web.json',
      'tsconfig.webworker.json',
      'tsconfig.worker.json',
      'tsconfig.config.json',
      'tsconfig.vitest.json',
      'tsconfig.cjs.json',
      'tsconfig.esm.json',
      'tsconfig.mjs.json',
      'tsconfig.doc.json',
      'tsconfig.paths.json',
      'tsconfig.main.json',
      'tsconfig.cypress-ct.json',
      'tsconfig.components.json',
    ],
    fileExtensions: ['tsconfig.json'],
  },
  'typescript-def': {
    fileExtensions: [
      'd.ts',
      'd.cts',
      'd.mts',
    ],
  },
  'typescript-react': {
    languageIds: ['typescriptreact'],
    fileExtensions: ['tsx'],
  },
  'typescript-test': {
    fileExtensions: [
      'spec.ts',
      'spec.cts',
      'spec.mts',
      'cy.ts',
      'e2e-spec.ts',
      'e2e-spec.cts',
      'e2e-spec.mts',
      'test.ts',
      'test.cts',
      'test.mts',
      'ts.snap',

      'spec-d.ts',
      'test-d.ts',

      'spec.tsx',
      'test.tsx',
      'tsx.snap',
      'cy.tsx',
    ],
  },
  'typescript': {
    languageIds: ['typescript'],
    fileExtensions: [
      'ts',
      'cts',
      'mts',
    ],
  },
  'typst': {
    languageIds: ['typst'],
    fileExtensions: ['typ'],
    fileNames: ['typst.toml'],
  },
  'unity': {
    languageIds: ['shaderlab'],
    fileExtensions: ['unity'],
  },
  'unocss': {
    fileNames: [
      'uno.config.js',
      'uno.config.mjs',
      'uno.config.ts',
      'uno.config.mts',
      'unocss.config.js',
      'unocss.config.mjs',
      'unocss.config.ts',
      'unocss.config.mts',
    ],
  },
  'url': {
    fileExtensions: ['url'],
  },
  'uv': {
    fileNames: ['uv.lock'],
  },
  'v': {
    languageIds: ['v'],
    fileExtensions: ['v'],
    fileNames: [
      'vpkg.json',
      'v.mod',
    ],
  },
  'vanilla-extract': {
    fileExtensions: ['css.ts'],
  },
  'vento': {
    fileExtensions: ['vto'],
  },
  'vercel-ignore': {
    fileNames: [
      '.vercelignore',
      '.nowignore',
    ],
  },
  'vercel': {
    fileNames: [
      'vercel.json',
      'now.json',
    ],
  },
  'verilog': {
    fileExtensions: [
      'vhd',
      'sv',
      'svh',
    ],
  },
  'vhs': {
    fileExtensions: ['tape'],
  },
  'video': {
    fileExtensions: [
      'webm',
      'mkv',
      'flv',
      'vob',
      'ogv',
      'ogg',
      'gifv',
      'avi',
      'mov',
      'qt',
      'wmv',
      'yuv',
      'rm',
      'rmvb',
      'mp4',
      'm4v',
      'mpg',
      'mp2',
      'mpeg',
      'mpe',
      'mpv',
      'm2v',
    ],
  },
  'vim': {
    languageIds: ['viml'],
    fileExtensions: [
      'vimrc',
      'gvimrc',
      'exrc',
      'vim',
      'viminfo',
    ],
  },
  'visual-studio': {
    languageIds: [
      'testOutput',
      'vb',
    ],
    fileExtensions: [
      'csproj',
      'ruleset',
      'sln',
      'suo',
      'vb',
      'vbs',
      'vcxitems',
      'vcxitems.filters',
      'vcxproj',
      'vcxproj.filters',
    ],
  },
  'vital': {
    fileExtensions: [
      'vital',
      'vitalbank',
      'vitallfo',
      'vitalskin',
      'vitaltable',
      'vitaltheme',
    ],
  },
  'vite': {
    fileNames: [
      'vite.config.js',
      'vite.config.mjs',
      'vite.config.cjs',
      'vite.config.ts',
      'vite.config.cts',
      'vite.config.mts',
    ],
  },
  'vitest': {
    fileNames: [
      'vitest.config.ts',
      'vitest.config.mts',
      'vitest.config.cts',
      'vitest.config.js',
      'vitest.config.mjs',
      'vitest.config.cjs',
      'vitest.workspace.js',
      'vitest.workspace.ts',
      'vitest.workspace.json',
    ],
  },
  'vs-codium': {
  },
  'vscode-ignore': {
    fileNames: ['.vscodeignore'],
  },
  'vscode': {
    fileExtensions: [
      'vsixmanifest',
      'vsix',
      'code-workplace',
      'code-workspace',
      'code-profile',
      'code-snippets',
    ],
  },
  'vue-config': {
    fileNames: [
      'vue.config.js',
      'vue.config.cjs',
      'vue.config.mjs',
      'vue.config.ts',
      'vue.config.cts',
      'vue.config.mts',
      '.vuerc',
    ],
  },
  'vue': {
    languageIds: ['vue'],
    fileExtensions: ['vue'],
  },
  'web-assembly': {
    fileExtensions: [
      'wat',
      'wasm',
    ],
  },
  'webpack': {
    fileNames: [
      'webpack.js',
      'webpack.cjs',
      'webpack.mjs',
      'webpack.ts',
      'webpack.cts',
      'webpack.mts',
      'webpack.base.js',
      'webpack.base.cjs',
      'webpack.base.mjs',
      'webpack.base.ts',
      'webpack.base.cts',
      'webpack.base.mts',
      'webpack.config.js',
      'webpack.config.cjs',
      'webpack.config.mjs',
      'webpack.config.ts',
      'webpack.config.cts',
      'webpack.config.mts',
      'webpack.common.js',
      'webpack.common.cjs',
      'webpack.common.mjs',
      'webpack.common.ts',
      'webpack.common.cts',
      'webpack.common.mts',
      'webpack.config.common.js',
      'webpack.config.common.cjs',
      'webpack.config.common.mjs',
      'webpack.config.common.ts',
      'webpack.config.common.cts',
      'webpack.config.common.mts',
      'webpack.config.common.babel.js',
      'webpack.config.common.babel.ts',
      'webpack.dev.js',
      'webpack.dev.cjs',
      'webpack.dev.mjs',
      'webpack.dev.ts',
      'webpack.dev.cts',
      'webpack.dev.mts',
      'webpack.development.js',
      'webpack.development.cjs',
      'webpack.development.mjs',
      'webpack.development.ts',
      'webpack.development.cts',
      'webpack.development.mts',
      'webpack.config.dev.js',
      'webpack.config.dev.cjs',
      'webpack.config.dev.mjs',
      'webpack.config.dev.ts',
      'webpack.config.dev.cts',
      'webpack.config.dev.mts',
      'webpack.config.dev.babel.js',
      'webpack.config.dev.babel.ts',
      'webpack.config.main.js',
      'webpack.config.renderer.ts',
      'webpack.mix.js',
      'webpack.mix.cjs',
      'webpack.mix.mjs',
      'webpack.mix.ts',
      'webpack.mix.cts',
      'webpack.mix.mts',
      'webpack.prod.js',
      'webpack.prod.cjs',
      'webpack.prod.mjs',
      'webpack.prod.ts',
      'webpack.prod.cts',
      'webpack.prod.mts',
      'webpack.prod.config.js',
      'webpack.prod.config.cjs',
      'webpack.prod.config.mjs',
      'webpack.prod.config.ts',
      'webpack.prod.config.cts',
      'webpack.prod.config.mts',
      'webpack.production.js',
      'webpack.production.cjs',
      'webpack.production.mjs',
      'webpack.production.ts',
      'webpack.production.cts',
      'webpack.production.mts',
      'webpack.server.js',
      'webpack.server.cjs',
      'webpack.server.mjs',
      'webpack.server.ts',
      'webpack.server.cts',
      'webpack.server.mts',
      'webpack.client.js',
      'webpack.client.cjs',
      'webpack.client.mjs',
      'webpack.client.ts',
      'webpack.client.cts',
      'webpack.client.mts',
      'webpack.config.server.js',
      'webpack.config.server.cjs',
      'webpack.config.server.mjs',
      'webpack.config.server.ts',
      'webpack.config.server.cts',
      'webpack.config.server.mts',
      'webpack.config.client.js',
      'webpack.config.client.cjs',
      'webpack.config.client.mjs',
      'webpack.config.client.ts',
      'webpack.config.client.cts',
      'webpack.config.client.mts',
      'webpack.config.production.babel.js',
      'webpack.config.production.babel.ts',
      'webpack.config.prod.babel.js',
      'webpack.config.prod.babel.cjs',
      'webpack.config.prod.babel.mjs',
      'webpack.config.prod.babel.ts',
      'webpack.config.prod.babel.cts',
      'webpack.config.prod.babel.mts',
      'webpack.config.prod.js',
      'webpack.config.prod.cjs',
      'webpack.config.prod.mjs',
      'webpack.config.prod.ts',
      'webpack.config.prod.cts',
      'webpack.config.prod.mts',
      'webpack.config.production.js',
      'webpack.config.production.cjs',
      'webpack.config.production.mjs',
      'webpack.config.production.ts',
      'webpack.config.production.cts',
      'webpack.config.production.mts',
      'webpack.config.staging.js',
      'webpack.config.staging.cjs',
      'webpack.config.staging.mjs',
      'webpack.config.staging.ts',
      'webpack.config.staging.cts',
      'webpack.config.staging.mts',
      'webpack.config.babel.js',
      'webpack.config.babel.ts',
      'webpack.config.base.babel.js',
      'webpack.config.base.babel.ts',
      'webpack.config.base.js',
      'webpack.config.base.cjs',
      'webpack.config.base.mjs',
      'webpack.config.base.ts',
      'webpack.config.base.cts',
      'webpack.config.base.mts',
      'webpack.config.staging.babel.js',
      'webpack.config.staging.babel.ts',
      'webpack.config.coffee',
      'webpack.config.test.js',
      'webpack.config.test.cjs',
      'webpack.config.test.mjs',
      'webpack.config.test.ts',
      'webpack.config.test.cts',
      'webpack.config.test.mts',
      'webpack.config.vendor.js',
      'webpack.config.vendor.cjs',
      'webpack.config.vendor.mjs',
      'webpack.config.vendor.ts',
      'webpack.config.vendor.cts',
      'webpack.config.vendor.mts',
      'webpack.config.vendor.production.js',
      'webpack.config.vendor.production.cjs',
      'webpack.config.vendor.production.mjs',
      'webpack.config.vendor.production.ts',
      'webpack.config.vendor.production.cts',
      'webpack.config.vendor.production.mts',
      'webpack.test.js',
      'webpack.test.cjs',
      'webpack.test.mjs',
      'webpack.test.ts',
      'webpack.test.cts',
      'webpack.test.mts',
      'webpack.dist.js',
      'webpack.dist.cjs',
      'webpack.dist.mjs',
      'webpack.dist.ts',
      'webpack.dist.cts',
      'webpack.dist.mts',
      'webpackfile.js',
      'webpackfile.cjs',
      'webpackfile.mjs',
      'webpackfile.ts',
      'webpackfile.cts',
      'webpackfile.mts',
    ],
  },
  'windi': {
    fileNames: [
      'windi.config.js',
      'windi.config.cjs',
      'windi.config.ts',
      'windi.config.cts',
      'windi.config.json',
    ],
    fileExtensions: ['windi'],
  },
  'workflow': {
    languageIds: ['github-actions-workflow'],
    fileExtensions: [
      'workflows/yml',
      'workflows/yaml',
    ],
  },
  'wxt': {
    fileNames: [
      'wxt.config.js',
      'wxt.config.ts',
    ],
  },
  'xaml': {
    fileExtensions: [
      'xaml',
      'axaml',
    ],
  },
  'xmake': {
    fileNames: ['xmake.lua'],
  },
  'xml': {
    fileExtensions: [
      'xml',
      'plist',
      'xsd',
      'dtd',
      'xsl',
      'xslt',
      'resx',
      'iml',
      'xquery',
      'tmLanguage',
      'manifest',
      'project',
      'xml.dist',
      'xml.dist.sample',
      'dmn',
      'jrxml',
    ],
    fileNames: ['.htaccess'],
  },
  'yaml': {
    languageIds: [
      'yaml',
      'spring-boot-properties-yaml',
    ],
    fileExtensions: [
      'yml',
      'yaml',
    ],
  },
  'yarn-lock': {
    fileNames: ['yarn.lock'],
  },
  'yarn': {
    fileNames: [
      '.yarnrc',
      '.yarnclean',
      '.yarn-integrity',
      'yarn-error.log',
      '.yarnrc.yml',
      '.yarnrc.yaml',
      'yarn.config.cjs',
    ],
  },
  'zap': {
    fileExtensions: ['zap'],
  },
  'zig': {
    fileExtensions: ['zig'],
  },

}

const { languageIds, fileExtensions, fileNames } = Object.entries(fileIcons).reduce(
  ({ languageIds, fileExtensions, fileNames }, [name, icon]) => ({
    languageIds: {
      ...languageIds,
      ...icon.languageIds?.reduce((a, c) => ({ ...a, [c]: name }), {}),
    },
    fileExtensions: {
      ...fileExtensions,
      ...icon.fileExtensions?.reduce((a, c) => ({ ...a, [c]: name }), {}),
    },
    fileNames: {
      ...fileNames,
      ...icon.fileNames?.reduce((a, c) => ({ ...a, [c]: name }), {}),
    },
  }),
  {
    languageIds: {},
    fileExtensions: {},
    fileNames: {},
  },
)

export { fileExtensions, fileIcons, fileNames, languageIds }
