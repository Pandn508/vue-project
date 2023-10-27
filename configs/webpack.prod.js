const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const { getPath } = require('./utils.js');
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          mangle: true
        },
        extractComments: false,
        minify: TerserPlugin.swcMinify
      })
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: getPath('public'),
          to: getPath('dist/public'),
          globOptions: {
            ignore: []
          }
        }
      ]
    })
  ],
  output: {
    clean: true,
    asyncChunks: true,
    chunkFilename: 'static/js/[name].[contenthash].js',
  },
})