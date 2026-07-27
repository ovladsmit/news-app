import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import webpack from "webpack";
import { BuildOption } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin"


export function buildPlugins({paths, isDev}: BuildOption): webpack.WebpackPluginInstance[] { // Плагины для вебпака
  return [
    //автоматически генерирует итоговый index.html в папке сборки и сам подключает туда <script>
    new HtmlWebpackPlugin({
      template: paths.html, //указывает, какой HTML-файл использовать как основу/
    }),

    //просто показывает прогресс сборки в процентах прямо в консоли
    new webpack.ProgressPlugin(),

    // вытаскивает CSS в отдельные .css-файлы, вместо того чтобы вставлять стили прямо в JS
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
}