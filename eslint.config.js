import config from '@antfu/eslint-config'

export default config({
  ignores: [],
}, {
  files: [
    'src/defaults/fileIcons.ts',
    'src/defaults/folderIcons.ts',
  ],
  rules: {
    'sort-keys': ['error', 'asc', { minKeys: 5 }],
  },
})
