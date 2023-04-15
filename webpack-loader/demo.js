/**
 * 
 * @param {string|Buffer} context 
 * @param {object} map 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param {any} meta meta 数据，可以是任何内容
 * @returns context
 */
// 其中 map 和 meta 是可选参
function Demo(context,map,meta){
  console.log("context",context);
  console.log("map",map);
  console.log("meta",meta);
  return context;
}

module.exports = Demo;