const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    library: 'tsamaya',
    libraryTarget: 'umd',
    filename: 'test-core.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};
