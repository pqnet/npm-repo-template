/** @format */
//@ts-check

// extends:
//   - eslint:recommended
//   - plugin:@typescript-eslint/recommended
// parser: '@typescript-eslint/parser'
// plugins:
//   - '@typescript-eslint'
// root: true

import js from '@eslint/js';
import ts from 'typescript-eslint';
/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  .../** @type {import('eslint').Linter.Config[]} */ (
    ts.configs.strictTypeChecked
  ),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
];
export default config;
