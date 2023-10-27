const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpackConfigProd = require('./webpack.prod');
const smp = new SpeedMeasurePlugin();

const sizeAnalyzer = merge(webpackConfigProd, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
const timeAnalyzer = smp.wrap(webpackConfigProd)

module.exports = process.env.ANALYZER === 'size' ? sizeAnalyzer : timeAnalyzer;