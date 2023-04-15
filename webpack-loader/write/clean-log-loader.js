function CleanLogLoader(content){
  return content.replace(/console\.log\(.*\);?/g,"");
}

module.exports = CleanLogLoader;