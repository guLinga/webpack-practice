class Done{
  apply(compiler){
    compiler.hooks.done.tap("Done",(compliation)=>{
      console.log('Done',compliation.assets);
    })
  }
}

class beforeRun{
  apply(compiler){
    compiler.hooks.beforeRun.tap("beforeRun",(compliation)=>{
      console.log('beforeRun',compliation.assets);
    })
  }
}

class Run{
  apply(compiler){
    compiler.hooks.run.tap("Run",(compliation)=>{
      console.log('Run',compliation.assets);
    })
  }
}

class Emit{
  apply(compiler){
    compiler.hooks.emit.tap("Emit",(compliation)=>{
      console.log('Emit',compliation);
    })
  }
}

class afterEmit{
  apply(compiler){
    compiler.hooks.afterEmit.tap("afterEmit",(compliation)=>{
      console.log('afterEmit',compliation.assets);
    })
  }
}

class compilation{
  apply(compiler){
    compiler.hooks.compilation.tap("compilation",(compliation)=>{
      console.log('compilation',compliation.assets);
    })
  }
}

class beforeCompile{
  apply(compiler){
    compiler.hooks.beforeCompile.tap("beforeCompile",(params,callback)=>{
      console.log('beforeCompile',params);
    })
  }
}

class compile{
  apply(compiler){
    compiler.hooks.compile.tap("compile",(compliation)=>{
      console.log('compile',compliation.assets);
    })
  }
}

class make{
  apply(compiler){
    compiler.hooks.make.tap("make",(compliation)=>{
      console.log('make',compliation.assets);
    })
  }
}

module.exports = {
  Done,
  beforeRun,
  Run,
  Emit,
  afterEmit,
  compilation,
  beforeCompile,
  compile,
  make
}