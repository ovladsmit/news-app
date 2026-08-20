import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOption } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
}: BuildOption): webpack.WebpackPluginInstance[] {
  // Плагины для вебпака
  const plugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    // строит наглядную визуализацию того, из чего состоит итоговый JS-бандл после сборки
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // пишет HTML-отчёт в файл вместо поднятия сервера
      openAnalyzer: false,
      reportFilename: "bundle-report.html",
    }),
  ];

  if (isDev) {
    plugins.push(
      // Включает горячую замену модулей без полной перезагрузки страницы
      new webpack.HotModuleReplacementPlugin(),
    );
  }

  return plugins;
}
