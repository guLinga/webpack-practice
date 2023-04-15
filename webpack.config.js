const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const RemoveCommentsPlugin = require('./webpack-plugin/webpack-comments-plugin');
const {Done,beforeRun,Run,Emit,afterEmit,compilation,beforeCompile,compile,make} = require('./webpack-plugin/lifecycle');

const Demo = require('./webpack-loader/demo');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.join(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.join(__dirname,'./webpack-loader/first.js'),
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: [
          {loader: path.join(__dirname,'./webpack-loader/second.js')},
          {loader: path.join(__dirname,'./webpack-loader/three.js')}
        ],
        enforce: 'post'
      },
      {
        test: /\.js$/,
        use: path.join(__dirname,'./webpack-loader/sync.js')
      }
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname,'node_modules'),
      path.join(__dirname,'webpack-loader')
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    // new RemoveCommentsPlugin(),
    // new Done(),
    // new beforeRun(),
    // new Run(),
    // new Emit(),
    // new afterEmit(),
    // new compilation(),
    // new beforeCompile(),
    // new compile(),
    // new make(),
  ]
}