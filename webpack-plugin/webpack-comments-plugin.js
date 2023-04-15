module.exports = class RemoveCommentsPlugin {
  apply(compiler){
    compiler.hooks.emit.tap('RemoveCommentsPlugin',
    compliation => {
      for(const name in compliation.assets){
        if(name.endsWith(".js")){
          var contents = compliation.assets[name].source();
          var noComments = contents.replace(/\/\*{2,}\/\s?/g,'');
          compliation.assets[name] = {
            source: ()=>noComments,
            size: ()=>noComments.length
          }
        }
      }


      // const assets = compliation.getAssets();
      // for(let i=0;i<assets.length;i++){
      //   // console.log(assets[i]);
      //   if(assets[i].name.endsWith(".js")){
      //     console.log(assets[i]);
      //     // compliation.rebuildModule(assets[i],(error,result)=>{
      //     //   console.log("error",error);
      //     //   console.log("result",result);
      //     //   // return result;
      //     // })
      //   }
      // }
    })
  }
}