const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const common = require('./webpack.common.js');
const server = require('../server.js');
const Components = require('unplugin-vue-components/webpack');
const { AntDesignVueResolver } =  require('unplugin-vue-components/resolvers');

module.exports = merge(common, {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new WebpackBar({
      reporters: ['fancy']
    }),
    Components({
      dirs: [],
      extensions: ['vue'],
      globs: [],
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ],
      include: [/\.vue$/, /\.vue\?vue/],
    })
  ],
  devServer: server
})
