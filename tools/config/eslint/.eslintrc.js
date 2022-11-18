/* eslint-disable line-comment-position */
/* eslint-disable no-inline-comments */
/* eslint-disable unicorn/prefer-module */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: [],
  extends: [],
  rules: {},
  settings: {},
  overrides: [
    {
      // JavaScript
      files: ['*.js', '*.cjs', '*.mjs'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: false,
          globalReturn: true,
          impliedStrict: true,
        },
      },
      env: {
        node: true,
        browser: false,
      },
      plugins: ['prettier'],
      extends: [
        '@handarel/eslint-config/rules/base',
        '@handarel/eslint-config/rules/import',
        '@handarel/eslint-config/rules/unicorn',
        '@handarel/eslint-config/rules/prettier',
      ],
      rules: {
        'prettier/prettier': ['error'],
      },
    },
  ],
};
