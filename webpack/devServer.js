'use strict'
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

console.log('Compiling...\n')

config.plugins.push(
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: ['Server running! :)']
    }
  })
)

// Initialize webpack-dev-server
const server = new WebpackDevServer(webpack(config), config.devServer)

// Start the server
server.listen(config.devServer.port)
