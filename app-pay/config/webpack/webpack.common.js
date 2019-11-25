const path = require('path');

const common = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'common': path.resolve(__dirname, '../../src/common')
    }
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader'
        }]
      }
    ]
  }
};

module.exports = common;
