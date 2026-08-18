
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-webpack5';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // --- SCSS: раздельные правила для CSS-модулей и обычных глобальных стилей ---
    config.module?.rules?.push(
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { esModule: false } },
          'sass-loader',
        ],
      },
    );

    // --- SVG: рендерим как React-компонент через svgr, исключая дефолтный asset-модуль ---
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        rule &&
        typeof rule === 'object' &&
        'test' in rule &&
        (rule.test as RegExp)?.test?.('.svg'),
    );
    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module?.rules?.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    // --- Резолвинг абсолютных FSD-импортов (shared/..., app/..., widgets/... и т.д.) ---
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../../src'),
      ];
    }

    return config;
  },
};

export default config;