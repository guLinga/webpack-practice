// const loaderUtils = require('loader-utils');

function loader2(content, map, meta) {
  console.log('异步 loader2 外',content, map, meta, this._module.content)
  const callback = this.async()
  setTimeout(() => {
    console.log('异步 loader2 内')
    callback(null, content, map, this.data.value)
  },500)
}

function pitch2(remainingRequest, precedingRequest, data) {
  data.value = 1;
  console.log('pitch loader2', data)
  this.callback(null,'123');
}

module.exports = loader2
module.exports.pitch = pitch2