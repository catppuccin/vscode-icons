const config = require('@antfu/eslint-config').default

module.exports = config({
  ignores: [],
}, {
  files: ['src/defaults/*.ts'],
  rules: {
    'sort-keys': ['error', 'asc', { minKeys: 10 }],
    'style/array-bracket-newline': ['error', { minItems: 2 }],
    'style/array-element-newline': ['error', 'always'],
    'style/object-curly-spacing': ['error', 'always'],
    'style/object-curly-newline': ['error', 'always'],
    'style/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
      allowMultiplePropertiesPerLine: false,
    }],
  },
})
