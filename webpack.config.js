'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, 
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader", 'postcss-loader']
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx'],
  }, 
  
  plugins: [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ]
    }
  })
],
}; 