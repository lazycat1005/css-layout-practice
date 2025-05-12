//HTML生成
const HtmlWebpackPlugin = require("html-webpack-plugin");
//抽離CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//清除dist資料夾
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//壓縮檔案
const CompressionPlugin = require("compression-webpack-plugin");
//出口路徑
const path = require("path");

module.exports = {
  //入口
  entry: "./src/index.js",
  //模式
  mode: "production",
  //出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash].js",
  },
  //loader 讓webpack讀取CSS、與各式圖片
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.(gif|svg)/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  //插件 增強webpack的功能
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
  //開發者工具
  devtool: "source-map",
};
