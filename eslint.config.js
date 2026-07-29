const { FlatCompat } = require('@eslint/eslintrc');
const { fixupPluginRules } = require('@eslint/compat');
const reactPlugin = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const i18nextPlugin = require('eslint-plugin-i18next');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const pluginFixMap = {
  react: reactPlugin,
  import: importPlugin,
};

const airbnbConfig = compat.extends('airbnb').map((config) => {
  if (!config.plugins) return config;
  const patchedPlugins = { ...config.plugins };
  Object.keys(pluginFixMap).forEach((pluginName) => {
    if (patchedPlugins[pluginName]) {
      patchedPlugins[pluginName] = fixupPluginRules(pluginFixMap[pluginName]);
    }
  });
  return { ...config, plugins: patchedPlugins };
});

module.exports = [
  ...airbnbConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __IS_DEV__: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        localStorage: 'readonly',
        document: 'readonly',
        window: 'readonly',
        HTMLButtonElement: 'readonly',
        SVGElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      i18next: i18nextPlugin,
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'no-underscore-dangle': ['error', { allow: ['__IS_DEV__'] }],
      'react/jsx-props-no-spreading': 'warn',
      'i18next/no-literal-string': 'warn',
    },
  },
];