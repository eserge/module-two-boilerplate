var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path')
var appPath = path.join(__dirname, 'src')

module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  debug: true,
  output: {
    path: './src/dist',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(gif|png|je?pg)$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html'),
      minify: false
    }),
    new CleanWebpackPlugin(['dist'], {
      root: appPath,
      verbose: true
    })
  ]
}
