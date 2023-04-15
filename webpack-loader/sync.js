function Sync(content,map,meta){
  console.log('同步loader');
  this.callback(null,content,map,meta);
}

module.exports = Sync;