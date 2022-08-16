module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'brace-style': 'error',
  },
  parserOptions: {
    sourceType: 'module',
  },
};
