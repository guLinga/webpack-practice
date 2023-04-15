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
      {test:/\.js$/,use: [
        {loader: 'clean-log-loader'},
        {loader: 'banner-loader',options:{
          author: '1514'
        }}
      ]}
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname,'node_module'),
      path.join(__dirname,'./webpack-loader/write')
    ]
  }
}