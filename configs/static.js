const miniSVGDataURI = require("mini-svg-data-uri");
module.exports = [
  // 图片文件
  {
    test: /\.(jpe?g|png|gif)$/i,
    type: "asset",
    generator: {
      filename: "static/images/[name]_[hash][ext]", // 独立的配置
    },
  },
  // svg 文件
  {
    test: /\.svg$/i,
    type: "asset",
    generator: {
      dataUrl(content) {
        content = content.toString();
        return miniSVGDataURI(content);
      },
    },
  },
  // 字体文件
  {
    test: /\.(otf|eot|woff2?|ttf|svg)$/i,
    type: "asset",
    generator: {
      filename: "static/fonts/[name]_[hash][ext]",
    },
  },
  // 数据文件
  {
    test: /\.(txt|xml)$/i,
    type: "asset/source", // exports the source code of the asset
  },
]