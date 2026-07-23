import path from "node:path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOption } from "./types/config";
import webpack from 'webpack'
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(option: BuildOption): webpack.Configuration {
  const {paths, mode, isDev} = option
  return {
  mode: mode,
  entry: paths.entry,
  output: {
    filename: '[name].js',
    path: paths.build,
    clean: true,
  },
  plugins: buildPlugins(option),
  
   module: {
    rules: buildLoaders(option)
  },
  resolve: buildResolvers(),
  devtool: isDev ?'inline-source-map': undefined,
  devServer: isDev ?buildDevServer(option): undefined
}
}