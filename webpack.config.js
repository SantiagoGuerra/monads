const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ['@babel/env', {
            targets: {
              browsers: 'last 2 chrome versions',
            },
          }],
        ],
      },
    }],
  },
  devtool: 'source-map',
};
