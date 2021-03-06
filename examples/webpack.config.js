var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../docs/js'),
    filename: 'bundle.js',
    publicPath: '/draft-js-editor/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    modules: [
      path.join(__dirname, "node_modules")
    ],
    symlinks: false,
  }
};
