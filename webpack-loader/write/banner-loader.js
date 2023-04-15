const schema = require('./banner-loader.json');

function BannerLoader(content){
  const options = this.getOptions(schema);
  const prefix = `
    /**
     * author: ${options.author}
     */ 
  `
  return prefix + content;
}

module.exports = BannerLoader;