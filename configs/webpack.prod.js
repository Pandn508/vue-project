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
    ],
    splitChunks: {
      chunks: 'all',
      // 缓存分组
      cacheGroups: {
        verdors: {
          name: 'verdor',
          test: /node_modules/,  // 设置命中目录规则
          priority: 1, // 优先级，数值越大，优先级越高
          minSize: 10, // 小于这个大小的文件，不分割
          minChunks: 1 // 最少复用几次，这里意思是只要用过一次就分割出来
        },
        // 公共模块
        common: {
          name: 'common',
          minChunks: 2,
          priority: 0,
          minSize: 10,
          minChunks: 2  // 只要引用过2次，就分割成公共代码
        }
      }
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: getPath('public'),
          to: getPath('dist'),
          globOptions: {
            ignore: ["**/index.html"]
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