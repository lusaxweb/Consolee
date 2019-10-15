const path = require('path')
const baseWebpackConfig = require('../webpack.base.js')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'consolee': './index.ts',
    'consolee.min': './index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    library: 'consolee',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  }
})