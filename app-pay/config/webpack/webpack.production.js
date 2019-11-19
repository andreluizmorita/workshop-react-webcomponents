const common = require('./webpack.common');

const config = {
  ...common,
  mode: 'production',
  entry: {
    'pay-button/index': './src/modules/pay-button/index.js',
    'pay-dialog/index': './src/modules/pay-dialog/index.js'
  }
};

module.exports = config;
