import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import safeguard from 'eslint-plugin-safeguard';
import unusedImports from 'eslint-plugin-unused-imports';

const compat = new FlatCompat({
    baseDirectory: process.cwd(),
  }),
  oldConfig = compat.config({
    extends: [
      'next',
      'next/typescript',
      'next/core-web-vitals',
      //'plugin:import/typescript',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:prettier/recommended',
    ],
  });

/** @type {import('eslint').ESLint.FlatConfig[]} */
const config = [
  js.configs.recommended,
  ...oldConfig,

  {
    plugins: { safeguard, 'unused-imports': unusedImports },

    rules: {
      'no-console': 'warn',
      'safeguard/no-raw-error': 'warn',
      'safeguard/trycatch-ensurer': 'off',
      'prefer-arrow-callback': 'error', //*
      'prefer-template': 'error', //*
      'max-len': ['off', { code: 80 }],
      'object-shorthand': 'error',
      'no-else-return': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'error',
      'no-unused-labels': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-undef': 'error',
      'consistent-return': 'error',
      'no-unreachable': 'error',
      eqeqeq: 'error',
      'unused-imports/no-unused-imports': 'error',

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
  },
];

export default config;
