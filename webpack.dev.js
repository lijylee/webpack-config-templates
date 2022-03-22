const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: 'only', // 只使用 HMR，不会 fallback 到 live reloading
        static: './public'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})