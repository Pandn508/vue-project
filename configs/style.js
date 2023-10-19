const cssBase = [
  'vue-style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          'autoprefixer'
        ]
      }
    }
  }
]
module.exports = [
  {
    test: /\.css$/i,
    use:cssBase
  },
  {
    test: /\.less$/i,
    use:[
      ...cssBase,
      'less-loader'
    ]
  },
  {
    test: /\.scss$/i,
    use:[
      ...cssBase,
      'sass-loader'
    ]
  }
]