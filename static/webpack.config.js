const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
  }),
];

module.exports = {
  entry: {
    index: './src/js/index.jsx',
  },
  plugins,
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
