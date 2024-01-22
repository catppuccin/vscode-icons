export const fileIcons: Record<string, {
  fileExtensions?: string[]
  fileNames?: string[]
  languageIds?: string[]
}> = {
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
  'android': {
    fileNames: ['androidmanifest.xml'],
    fileExtensions: [
      'apk',
      'smali',
      'dex',
    ],
  },
  'antlr': {
    fileExtensions: ['g4'],
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
  'audio': {
    fileExtensions: [
      'mp3',
      'flac',
      'm4a',
      'wma',
      'aiff',
      'wav',
    ],
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
  'binary': {
    languageIds: ['code-text-binary'],
    fileExtensions: ['bin'],
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
  'bun': {
    fileNames: ['bunfig.toml'],
  },
  'bun-lock': {
    fileNames: ['bun.lockb'],
  },
  'c': {
    languageIds: ['c'],
    fileExtensions: [
      'c',
      'i',
      'mi',
    ],
  },
  'c-header': {
    fileExtensions: ['h'],
  },
  'caddy': {
    fileNames: ['caddyfile'],
  },
  'capacitor': {
    fileNames: [
      'capacitor.config.json',
      'capacitor.config.ts',
    ],
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
  'csharp': {
    languageIds: ['csharp'],
    fileExtensions: [
      'cs',
      'csx',
      'csharp',
    ],
  },
  'css': {
    languageIds: ['css'],
    fileExtensions: ['css'],
  },
  'css-map': {
    fileExtensions: ['css.map'],
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
    fileExtensions: ['d'],
  },
  'dart': {
    languageIds: ['dart'],
    fileExtensions: ['dart'],
  },
  'dart-generated': {
    fileExtensions: [
      'freezed.dart',
      'g.dart',
    ],
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
    ],
  },
  'deno': {
    fileNames: [
      'deno.json',
      'deno.jsonc',
    ],
  },
  'deno_lock': {
    fileNames: ['deno.lock'],
  },
  'dependabot': {
    fileNames: [
      'dependabot.yml',
      'dependabot.yaml',
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
  'drawio': {
    fileExtensions: [
      'drawio',
      'dio',
    ],
  },
  'editorconfig': {
    languageIds: ['editorconfig'],
    fileNames: ['.editorconfig'],
  },
  'ejs': {
    fileExtensions: ['ejs'],
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
    ],
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
    ],
  },
  'eslint-ignore': {
    fileNames: [
      '.eslintignore',
      '.eslintcache,',
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
  'go': {
    languageIds: ['go'],
    fileExtensions: ['go'],
  },
  'go-mod': {
    fileNames: [
      'go.mod',
      'go.sum',
      'go.work',
      'go.work.sum',
    ],
  },
  'godot': {
    languageIds: ['gdscript'],
    fileExtensions: ['gd'],
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
  'haskell': {
    languageIds: ['haskell'],
    fileExtensions: ['hs'],
  },
  'haxe': {
  },
  'helm': {
  },
  'heroku': {
  },
  'histoire': {
  },
  'html': {
  },
  'http': {
  },
  'husky': {
  },
  'image': {
  },
  'ionic': {
  },
  'java': {
  },
  'java-class': {
  },
  'java-jar': {
  },
  'javascript-config': {
  },
  'javascript-map': {
  },
  'javascript-react': {
  },
  'javascript-test': {
  },
  'jest': {
  },
  'jinja': {
  },
  'json': {
  },
  'julia': {
  },
  'jupyter': {
  },
  'key': {
  },
  'kotlin': {
  },
  'laravel': {
  },
  'latex': {
  },
  'lerna': {
  },
  'less': {
  },
  'lib': {
  },
  'license': {
  },
  'lint-staged': {
  },
  'lisp': {
  },
  'log': {
  },
  'lua': {
  },
  'makefile': {
  },
  'markdown': {
  },
  'markdown-mdx': {
  },
  'marko': {
  },
  'matlab': {
  },
  'maven': {
  },
  'mermaid': {
  },
  'meson': {
  },
  'mjml': {
  },
  'modernizr': {
  },
  'ms-excel': {
  },
  'ms-powerpoint': {
  },
  'ms-word': {
  },
  'nativescript': {
  },
  'nest': {
  },
  'netlify': {
  },
  'next': {
  },
  'nextflow': {
  },
  'nginx': {
  },
  'nim': {
  },
  'ninja': {
  },
  'nix': {
  },
  'nodemon': {
  },
  'npm': {
  },
  'npm-ignore': {
  },
  'npm-lock': {
  },
  'nuget': {
  },
  'nunjucks': {
  },
  'nuxt': {
  },
  'nuxt-ignore': {
  },
  'ocaml': {
  },
  'package-json': {
  },
  'panda-css': {
  },
  'pdf': {
  },
  'perl': {
  },
  'playwright': {
  },
  'plop': {
  },
  'pnpm': {
  },
  'pnpm-lock': {
  },
  'postcss': {
  },
  'powershell': {
  },
  'premake': {
  },
  'prettier': {
  },
  'prettier-ignore': {
  },
  'prisma': {
  },
  'prolog': {
  },
  'properties': {
  },
  'proto': {
  },
  'pug': {
  },
  'python': {
  },
  'python-compiled': {
  },
  'r': {
  },
  'racket': {
  },
  'razor': {
  },
  'readme': {
  },
  'reason': {
  },
  'redwood': {
  },
  'remix': {
  },
  'renovate': {
  },
  'rescript': {
  },
  'robots': {
  },
  'rollup': {
  },
  'ruby': {
  },
  'ruby-gem': {
  },
  'ruby-gem-lock': {
  },
  'rust': {
  },
  'sass': {
  },
  'scala': {
  },
  'search': {
  },
  'semantic-release': {
  },
  'semgrep': {
  },
  'semgrep-ignore': {
  },
  'sentry': {
  },
  'serverless': {
  },
  'shader': {
  },
  'sketch': {
  },
  'snowpack': {
  },
  'solidity': {
  },
  'sonar-cloud': {
  },
  'stackblitz': {
  },
  'stencil': {
  },
  'stitches': {
  },
  'storybook': {
  },
  'storybook-svelte': {
  },
  'storybook-vue': {
  },
  'stylelint': {
  },
  'stylelint-ignore': {
  },
  'sublime': {
  },
  'svelte': {
  },
  'svelte-config': {
  },
  'svg': {
  },
  'swift': {
  },
  'tailwind': {
  },
  'tauri': {
  },
  'tauri-ignore': {
  },
  'terraform': {
  },
  'text': {
  },
  'todo': {
  },
  'toml': {
  },
  'twine': {
  },
  'typescript': {
  },
  'typescript-config': {
  },
  'typescript-def': {
  },
  'typescript-react': {
  },
  'typescript-test': {
  },
  'unity': {
  },
  'unocss': {
  },
  'url': {
  },
  'v': {
  },
  'vercel': {
  },
  'vercel-ignore': {
  },
  'verilog': {
  },
  'video': {
  },
  'vim': {
  },
  'visual-studio': {
  },
  'vite': {
  },
  'vitest': {
  },
  'vs-codium': {
  },
  'vscode': {
  },
  'vscode-ignore': {
  },
  'vue': {
  },
  'vue-config': {
  },
  'web-assembly': {
  },
  'webpack': {
  },
  'windi': {
  },
  'workflow': {
  },
  'xaml': {
  },
  'xmake': {
  },
  'yaml': {
  },
  'yarn': {
  },
  'yarn-lock': {
  },
  'zig': {
  },
}

export const fileIconEntries = Object.entries(fileIcons)
