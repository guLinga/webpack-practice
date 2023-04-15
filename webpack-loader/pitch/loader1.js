function loader1(content,map,meta){
  console.log('同步 loader1',content);
  if (typeof content === 'string' && content.includes('pitch2 return')) {
    content = content.replace('pitch2 return', 'pitch1 return');
  }
  this.callback(null,content,map,meta);
}

function pitch1(remainingRequest, precedingRequest, data){
  console.log('pitch loader1', data);
}

module.exports = loader1;
module.exports.pitch = pitch1;