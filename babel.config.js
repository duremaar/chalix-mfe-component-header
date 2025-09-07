const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('babel-preserve-modules', {
  presets: ['@babel/preset-typescript'],
});
