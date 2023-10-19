const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const common = require('./webpack.common.js');
const server = require('../server.js');
module.exports = merge(common, {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new WebpackBar({
      reporters: ['fancy']
    })
  ],
  devServer: server
})