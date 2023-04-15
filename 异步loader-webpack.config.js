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
        loader: path.join(__dirname,'./webpack-loader/first.js')
      },
      {
        test: /\.js$/,
        use: path.join(__dirname,'./webpack-loader/async.js')
      },
      {
        test: /\.js$/,
        use: [
          {loader: path.join(__dirname,'./webpack-loader/second.js')}
        ]
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