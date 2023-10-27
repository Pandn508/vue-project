const lodash = require('lodash');
const config = {
  "$schema": "https://json.schemastore.org/swcrc",
  jsc: {
    parser: {
      syntax: "typescript",
      jsx: false,
      dynamicImport: false,
      privateMethod: false,
      functionBind: false,
      exportDefaultFrom: false,
      exportNamespaceFrom: false,
      decorators: false,
      decoratorsBeforeExport: false,
      topLevelAwait: false,
      importMeta: false
    },
    transform: null,
    loose: false,
    externalHelpers: false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    keepClassNames: false
  },
  minify: false
}

function getSWCConfig() {
  const isPord = process.env.NODE_ENV === 'production';
  if (isPord) {
    let swcrc = {
      minify: true,
      env: {
        forceAllTransforms: true,
        mode: "usage",
        corejs: 3,
        targets: {
          chrome: '60',
          ie: '11'
        }
      }
    }
    lodash.merge(swcrc, config);
    return swcrc;
  }
  lodash.merge(config, {
    jsc: {
      target: "es2015",
    }
  })
  return config;
}

module.exports = {
  getSWCConfig
}