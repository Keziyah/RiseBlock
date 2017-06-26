'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');



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
        loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap', 
      }
    ]
  },
  plugins: [
       new webpack.LoaderOptionsPlugin({
         test: /\.scss$/,
         options: {
           postcss: [autoprefixer(), precss()]
         }
       })
     ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}; 