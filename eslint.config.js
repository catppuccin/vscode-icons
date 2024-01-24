import config from '@antfu/eslint-config'

export default config({
  ignores: [],
}, {
  files: ['src/defaults/*.ts'],
  rules: {
    'sort-keys': ['error', 'asc', { minKeys: 10 }],
  },
})
