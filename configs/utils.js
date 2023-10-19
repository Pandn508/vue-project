const path = require('path');
function getPath(_path){
  return path.join(process.cwd(), _path);
}
function packageInfo (){
  return require(getPath('package.json'));
}
function outFileName(pathData){
  const info = packageInfo();
  if(pathData.chunk.name === 'main') 
    return `static/js/${info.name}.main.js`;
  return 'static/js/[name].[chunkhash].js';
}

module.exports = {
  getPath,
  outFileName
}