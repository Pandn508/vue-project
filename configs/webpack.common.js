const HtmlWebpackPlugin = require('html-webpack-plugin');
const UnoCSS = require('@unocss/webpack').default;
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { getPath, outFileName, loadEnv } = require('./utils');
const { getSWCConfig } = require('./swcrc');
const styleLoader = require('./style');
const staticLoader = require('./static');
/** * @type import('webpack').Configuration */
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: outFileName,
    path: getPath('dist'),
    assetModuleFilename: 'static/assets/[name]_[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.(ts|js)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: getSWCConfig()
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|svg|otf|ttf|woff|woff2)$/i,
        type: 'asset'
      },
      ...styleLoader,
      ...staticLoader,
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    UnoCSS(),
    new HtmlWebpackPlugin(
      {
        template: getPath('index.html'),
        filename: 'index.html',
      }
    ),
    new DefinePlugin({
      'process.env': JSON.stringify(loadEnv()),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],
  optimization: {
    realContentHash: true
  },
  resolve: {
    alias: {
      '@': getPath('src')
    },
    extensions: ['.ts', '.js', '.vue', '.tsx']
  }
}
