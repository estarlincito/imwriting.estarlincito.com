/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    env: {
      es2020: true,
      browser: true,
      node: true,
    },

    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    extends: [
      'next',
      'eslint:recommended',
      'next/typescript',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@next/next/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],

    parser: '@typescript-eslint/parser',

    plugins: ['@typescript-eslint', 'unused-imports', 'react', 'import'],

    rules: {
      // 'no-null': 'warn', // not in eslint
      // 'consistent-object-methods': 'error', // not in eslint

      ///
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-template': 'error',
      'no-undef': 'error',
      'consistent-return': 'error',
      'no-unreachable': 'error',
      eqeqeq: 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'max-len': ['off', { code: 80 }],
      'object-shorthand': 'error',
      'no-else-return': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'error',
      'no-unused-labels': 'error',
      'unused-imports/no-unused-imports': 'warn',
      'import/no-unused-modules': [
        'error',
        {
          unusedExports: false,
          missingExports: true,
        },
      ],
      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1],
        },
      ],

      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  }),
];

export default eslintConfig;
