const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          use: {
            loader: "babel-loader"
          },
          test: /\.js?$/,
          exclude: /node_modules/
        },
        {
          use: ["file-loader"],
          test: /\.(jpe?g|png|gif)$/i
        },
        {
          use: ["raw-loader"],
          test: /\.svg$/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader"
            },
          ]
        }
      ]
    }
};