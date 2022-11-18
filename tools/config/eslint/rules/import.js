/* eslint-disable max-lines */
/* eslint-disable unicorn/prefer-module */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: {
    'import/prefer-default-export': ['off'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
          'type',
        ],
      },
    ],
  },
};
