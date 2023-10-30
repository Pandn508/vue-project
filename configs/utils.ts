import path from 'path';
import dotenv from 'dotenv';
function getPath(_path) {
  return path.join(process.cwd(), _path);
}
function packageInfo() {
  return require(getPath('package.json'));
}
function outFileName(pathData) {
  const info = packageInfo();
  if (pathData.chunk.name === 'main') return `static/js/${info.name}.main.js`;
  return 'static/js/[name].[chunkhash].js';
}

function loadEnv() {
  const mode = process.env.NODE_ENV || 'development';
  const env = dotenv.config({
    path: getPath(`.env.${mode}`)
  });
  if (env.error) {
    console.error(env.error);
    return {};
  }
  return env.parsed;
}

export { getPath, outFileName, loadEnv, packageInfo };
