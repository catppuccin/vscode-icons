/**
 * Default folder icon associations
 * Keys are icon file basenames (without folder_ prefix)
 */
const folderIcons: Record<string, {
  folderNames?: Array<string>
}> = {
  'admin': {
    folderNames: [
      'admin',
      'admins',
      'manager',
      'managers',
      'moderator',
      'moderators',
    ],
  },
  'android': {
    folderNames: ['android'],
  },
  'animation': {
    folderNames: [
      'anim',
      'anims',
      'animation',
      'animations',
      'animated',
    ],
  },
  'api': {
    folderNames: [
      'api',
      'apis',
      'restapi',
    ],
  },
  'app': {
    folderNames: [
      'app',
      'apps',
    ],
  },
  'assets': {
    folderNames: [
      'asset',
      'assets',
    ],
  },
  'audio': {
    folderNames: [
      'aud',
      'auds',
      'audio',
      'audios',
      'music',
      'sound',
      'sounds',
    ],
  },
  'audit': {
    folderNames: [
      'audit',
      'audits',
    ],
  },
  'aws': {
    folderNames: [
      'aws',
      '.aws',
    ],
  },
  'benchmark': {
    folderNames: [
      'benchmark',
      'benchmarks',
      'performance',
      'measure',
      'measures',
      'measurement',
    ],
  },
  'circle-ci': {
    folderNames: ['.circleci'],
  },
  'client': {
    folderNames: [
      'client',
      'clients',
      'frontend',
      'frontends',
      'pwa',
    ],
  },
  'cloud': {
    folderNames: ['cloud'],
  },
  'command': {
    folderNames: [
      'command',
      'commands',
      'cmd',
      'cli',
      'clis',
    ],
  },
  'components': {
    folderNames: [
      'components',
      'widget',
      'widgets',
      'fragments',
    ],
  },
  'composables': {
    folderNames: [
      'composable',
      'composables',
    ],
  },
  'config': {
    folderNames: [
      'cfg',
      'cfgs',
      'conf',
      'confs',
      '.config',
      'config',
      'configs',
      'configuration',
      'configurations',
      'setting',
      '.setting',
      'settings',
      '.settings',
      'META-INF',
      'option',
      'options',
    ],
  },
  'connection': {
    folderNames: [
      'connection',
      'connections',
      'integration',
      'integrations',
    ],
  },
  'constant': {
    folderNames: [
      'constant',
      'constants',
    ],
  },
  'content': {
    folderNames: [
      'content',
      'contents',
    ],
  },
  'controllers': {
    folderNames: [
      'controller',
      'controllers',
      'service',
      'services',
      'provider',
      'providers',
      'handler',
      'handlers',
    ],
  },
  'core': {
    folderNames: ['core'],
  },
  'coverage': {
    folderNames: [
      'coverage',
      '.nyc-output',
      '.nyc_output',
      'e2e',
      'it',
      'integration-test',
      'integration-tests',
      '__integration-test__',
      '__integration-tests__',
    ],
  },
  'cypress': {
    folderNames: [
      'cypress',
      '.cypress',
    ],
  },
  'database': {
    folderNames: [
      'db',
      'database',
      'databases',
      'sql',
      'data',
      '_data',
    ],
  },
  'debug': {
    folderNames: [
      'debug',
      'debugging',
    ],
  },
  'devcontainer': {
    folderNames: ['.devcontainer'],
  },
  'direnv': {
    folderNames: ['.direnv'],
  },
  'dist': {
    folderNames: [
      'dist',
      'out',
      'build',
      'release',
      'bin',
      '.output',
    ],
  },
  'docker': {
    folderNames: [
      'docker',
      'dockerfiles',
      '.docker',
    ],
  },
  'docs': {
    folderNames: [
      '_post',
      '_posts',
      'doc',
      'docs',
      'document',
      'documents',
      'documentation',
      'post',
      'posts',
      'article',
      'articles',
    ],
  },
  'download': {
    folderNames: [
      'downloads',
      'download',
    ],
  },
  'examples': {
    folderNames: [
      'demo',
      'demos',
      'example',
      'examples',
      'sample',
      'samples',
      'sample-data',
    ],
  },
  'firebase': {
    folderNames: [
      'firebase',
      '.firebase',
    ],
  },
  'fonts': {
    folderNames: [
      'font',
      'fonts',
    ],
  },
  'functions': {
    folderNames: [
      'func',
      'funcs',
      'function',
      'functions',
      'lambda',
      'lambdas',
      'logic',
      'math',
      'maths',
      'calc',
      'calcs',
      'calculation',
      'calculations',
    ],
  },
  'git': {
    folderNames: [
      '.git',
      'patches',
      'githooks',
      '.githooks',
      'submodules',
      '.submodules',
    ],
  },
  'github': {
    folderNames: [
      '.github',
      'github',
    ],
  },
  'gitlab': {
    folderNames: ['.gitlab'],
  },
  'hooks': {
    folderNames: ['hook', 'hooks', 'trigger', 'triggers'],
  },
  'husky': {
    folderNames: [
      'husky',
      '.husky',
    ],
  },
  'images': {
    folderNames: [
      '_images',
      '_image',
      '_imgs',
      '_img',
      'images',
      'image',
      'imgs',
      'img',
      'icons',
      'icon',
      'icos',
      'ico',
      'figures',
      'figure',
      'figs',
      'fig',
      'screenshot',
      'screenshots',
      'screengrab',
      'screengrabs',
      'pic',
      'pics',
      'picture',
      'pictures',
      'photo',
      'photos',
      'photograph',
      'photographs',
    ],
  },
  'intellij': {
    folderNames: ['.idea'],
  },
  'kubernetes': {
    folderNames: [
      'kubernetes',
      '.kubernetes',
      'k8s',
      '.k8s',
    ],
  },
  'layouts': {
    folderNames: [
      'layout',
      'layouts',
      '_layouts',
    ],
  },
  'locales': {
    folderNames: [
      'i18n',
      'internationalization',
      'lang',
      'langs',
      'language',
      'languages',
      'locale',
      'locales',
      'l10n',
      'localization',
      'translation',
      'translate',
      'translations',
      '.tx',
    ],
  },
  'middleware': {
    folderNames: [
      'middleware',
      'middlewares',
    ],
  },
  'mocks': {
    folderNames: [
      '_draft',
      '_drafts',
      'mock',
      'mocks',
      'fixture',
      'fixtures',
      'draft',
      'drafts',
      'concept',
      'concepts',
      'sketch',
      'sketches',
    ],
  },
  'next': {
    folderNames: ['.next'],
  },
  'node': {
    folderNames: ['node_modules'],
  },
  'nuxt': {
    folderNames: [
      'nuxt',
      '.nuxt',
    ],
  },
  'packages': {
    folderNames: [
      'package',
      'packages',
      'pkg',
      'pkgs',
    ],
  },
  'plugins': {
    folderNames: [
      'plugin',
      'plugins',
      '_plugins',
      'mod',
      'mods',
      'modding',
      'extension',
      'extensions',
      'addon',
      'addons',
      'module',
      'modules',
    ],
  },
  'prisma': {
    folderNames: ['prisma'],
  },
  'public': {
    folderNames: [
      '_site',
      'public',
      'www',
      'wwwroot',
      'web',
      'website',
      'site',
      'browser',
      'browsers',
    ],
  },
  'queue': {
    folderNames: [
      'queue',
      'queues',
      'bull',
      'mq',
    ],
  },
  'redux': {
    folderNames: ['redux'],
  },
  'routes': {
    folderNames: [
      'routes',
      'router',
      'routers',
    ],
  },
  'sass': {
    folderNames: [
      'sass',
      '_sass',
      'scss',
      '_scss',
    ],
  },
  'scripts': {
    folderNames: [
      'script',
      'scripts',
      'scripting',
    ],
  },
  'security': {
    folderNames: ['security'],
  },
  'server': {
    folderNames: [
      'server',
      'servers',
      'backend',
    ],
  },
  'src': {
    folderNames: [
      'src',
      'srcs',
      'source',
      'sources',
      'code',
    ],
  },
  'storybook': {
    folderNames: [
      '.storybook',
      'storybook',
      'stories',
      '__stories__',
    ],
  },
  'styles': {
    folderNames: [
      'css',
      'stylesheet',
      'stylesheets',
      'style',
      'styles',
    ],
  },
  'svg': {
    folderNames: [
      'svg',
      'svgs',
    ],
  },
  'tauri': {
    folderNames: ['src-tauri'],
  },
  'temp': {
    folderNames: [
      'temp',
      '.temp',
      'tmp',
      '.tmp',
      'cached',
      'cache',
      '.cache',
    ],
  },
  'templates': {
    folderNames: [
      'template',
      'templates',
    ],
  },
  'tests': {
    folderNames: [
      'test',
      'tests',
      'testing',
      '__tests__',
      '__snapshots__',
      '__mocks__',
      '__fixtures__',
      '__test__',
      'spec',
      'specs',
    ],
  },
  'types': {
    folderNames: [
      'typings',
      '@types',
      'types',
    ],
  },
  'upload': {
    folderNames: [
      'uploads',
      'upload',
    ],
  },
  'utils': {
    folderNames: [
      'util',
      'utils',
      'utility',
      'utilities',
    ],
  },
  'vercel': {
    folderNames: [
      'vercel',
      '.vercel',
      'now',
      '.now',
    ],
  },
  'video': {
    folderNames: [
      'vid',
      'vids',
      'video',
      'videos',
      'movie',
      'movies',
    ],
  },
  'views': {
    folderNames: [
      'view',
      'views',
      'screen',
      'screens',
      'page',
      'pages',
      'public_html',
      'html',
    ],
  },
  'vscode': {
    folderNames: [
      '.vscode',
      '.vscode-test',
    ],
  },
  'workflows': {
    folderNames: [
      'workflow',
      'workflows',
      'ci',
      '.ci',
    ],
  },
  'yarn': {
    folderNames: ['.yarn'],
  },
}

const { folderNames } = Object.entries(folderIcons).reduce(
  ({ folderNames }, [name, icon]) => ({
    folderNames: {
      ...folderNames,
      ...icon.folderNames?.reduce((a, c) => ({ ...a, [c]: `folder_${name}` }), {}),
    },
  }),
  {
    folderNames: {},
  },
)

export { folderNames }
