'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const serverOptions = require('./serverOptions')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: '[name].js'
  },
  devServer: serverOptions,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
