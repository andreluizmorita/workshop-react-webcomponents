const common = require('./webpack.common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  ...common,
  entry: './src/modules/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      isProd: false,
      template: './index.html',
      environment: 'development'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
};

module.exports = config;
