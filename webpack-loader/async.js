function Async(content,map,mate){ 
  console.log('异步 loader 外');
  // this.async 告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。
  const callback = this.async();
  setTimeout(()=>{
    console.log('异步 loader 内');
    // 调用 callback 后，才会执行下一个 loader
    callback(null,content,map,mate);
  },500)
}

module.exports = Async;