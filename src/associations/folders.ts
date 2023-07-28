export const folders: IconMap = {
  folder_android: ['android'],
  folder_api: ['api', 'apis', 'restapi'],
  folder_app: ['app', 'apps', 'application'],
  folder_circle_ci: ['.circleci'],
  folder_client: ['client', 'clients', 'frontend', 'pwa'],
  folder_cloud: ['.aws', 'aws', 'azure', 'cloud', 'clouds'],
  folder_components: ['components', 'widget', 'widgets', 'fragments'],
  folder_composables: [
    'hook',
    'hooks',
    'composable',
    'composables',
    'mixin',
    'mixins',
  ],
  folder_config: [
    'cfg',
    'cfgs',
    'conf',
    'confs',
    'config',
    'configs',
    'configuration',
    'configurations',
    'setting',
    '.setting',
    'settings',
    '.settings',
    'META-INF',
  ],
  folder_controllers: [
    'controller',
    'controllers',
    'service',
    'services',
    'provider',
    'providers',
    'handler',
    'handlers',
  ],
  folder_coverage: [
    'coverage',
    'coverages',
    '.nyc-output',
    '.nyc_output',
  ],
  folder_cypress: ['cypress', '.cypress'],
  folder_debug: ['debug'],
  folder_dist: [
    '.output',
    'dist',
    'out',
    'output',
    'build',
    'release',
    'bin',
    'target',
  ],
  folder_docs: ['doc', 'docs', 'document', 'documents', 'documentation'],
  folder_download: ['download', 'downloads'],
  folder_examples: [
    'demo',
    'demos',
    'example',
    'examples',
    'sample',
    'samples',
    'sample-data',
  ],
  folder_fastlane: ['fastlane'],
  folder_fonts: ['font', 'fonts'],
  folder_functions: [
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
  folder_github: ['.github'],
  folder_husky: ['husky', '.husky'],
  folder_images: [
    'asset',
    'assets',
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
  ],
  folder_ios: ['ios'],
  folder_layouts: ['layout', 'layouts', '_layouts'],
  folder_linux: ['linux'],
  folder_locales: [
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
  ],
  folder_macos: ['mac', 'macos', 'osx', 'darwin'],
  folder_mocks: [
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
    'stub',
    'stubs',
  ],
  folder_next: ['.next'],
  folder_node: ['node_modules'],
  folder_nuxt: ['.nuxt', 'nuxt'],
  folder_packages: ['package', 'packages', 'pkg', 'pkgs'],
  folder_playground: ['playground', 'playgrounds'],
  folder_plugins: [
    'plugin',
    'plugins',
    '_plugins',
    'extension',
    'extensions',
    'addon',
    'addons',
    'module',
    'modules',
  ],
  folder_public: ['public', 'www', 'wwwroot', 'web', 'website', 'site'],
  folder_routes: ['routes', 'router', 'routers'],
  folder_sass: ['sass', '_sass', 'scss', '_scss'],
  folder_scripts: ['scripts', 'script'],
  folder_server: ['server', 'servers', 'backend'],
  folder_src: ['src', 'srcs', 'source', 'sources', 'code'],
  folder_styles: [
    'css',
    'stylesheet',
    'stylesheets',
    'style',
    'styles',
    'theme',
    'themes',
  ],
  folder_tauri: ['src-tauri', 'tauri'],
  folder_templates: ['template', 'templates', '_template', '_templates'],
  folder_tests: [
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
  folder_types: ['typings', '@types', 'types'],
  folder_utils: ['tools', 'tooling', 'util', 'utils', 'utility', 'utilities'],
  folder_views: ['view', 'views', 'screen', 'screens', 'page', 'pages', 'html'],
  folder_vscode: ['.vscode', '.vscode-test'],
  folder_windows: ['windows'],
  folder_workflows: ['workflow', 'workflows', 'ci', '.ci'],
}

export const foldersExpanded: IconMap = Object.entries(folders).reduce(
  (acc, [icon, langs]) => ({ ...acc, [`${icon}__open`]: langs }),
  {},
)
