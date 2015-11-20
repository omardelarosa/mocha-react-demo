/*
 *
 * This file serves as a 'base' for webpack configuration across environments.
 *
 */

var path          = require('path')
  , webpack       = require('webpack');

var config = module.exports = {
  context: path.join(__dirname, '../'),

  // Multiple entries are designed to be each paired with a single Rails view.
  // The 'base' entry ought to precede each other entry point

  entry: {
    "main": './src/main.js',
  },
  output: {
    filename: 'main-bundle.js',
    path: path.join(__dirname, '..', 'public' )
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx'],
    modulesDirectories: [ 'node_modules' ],
  },
  module: {
    loaders: [
      // For React JSX support
      { test: /(\.jsx|\.js)$/, exclude: /(node_modules)/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    // Creates a few useful globals
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react'
    })
  ]
};
