import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOption } from './types/config'
export function buildLoaders(options: BuildOption): webpack.RuleSetRule[] { // Лоадеры для вебпака
  return [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? 'style-loader':MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => resPath.includes('.module.'),
                localIdentName : options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                namedExport: false, 
              },
              
            }
          },
          "sass-loader",
        ],
      },
      {
        test:/\.svg$/,
        use:['@svgr/webpack']
      },
      {
        test: /\.(png|jpe?g|gif|woff2|woff)/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
}