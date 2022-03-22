const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[contenthash:8].bundle.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'auto' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      BASE_API_URL: JSON.stringify('https://api.com')
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].bundle.css'
    })
  ]
}
