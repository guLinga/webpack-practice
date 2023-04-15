const path = require('path');
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
        loader: 'raw'
      }
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname,'node_modules'),
      path.join(__dirname,'webpack-loader')
    ]
  }
}