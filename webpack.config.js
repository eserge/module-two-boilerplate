var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var appPath = path.join(__dirname, 'src');

var env = process.env.NODE_ENV || 'dev';
var debug = env !== 'production';
var minify = !debug;

var plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(appPath, 'index.html'),
    minify: false
  }),
  new CleanWebpackPlugin(['dist'], {
    root: appPath,
    verbose: true
  })
];

if (minify) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  debug: debug,
  devtool: 'inline-source-map',
  output: {
    path: './dist',
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
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(svg|gif|png|je?pg)$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file'
      }
    ]
  },
  plugins: plugins
};
