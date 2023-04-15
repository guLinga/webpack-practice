function loader3(content, map, meta) {
  console.log('loader3',content, map, meta)
  this.callback(null, content, map, meta)
}

function pitch3(remainingRequest, precedingRequest, data) {
  console.log('pitch loader3', data)
}
module.exports = loader3
module.exports.pitch = pitch3