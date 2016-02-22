var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');

const ENV = process.env.NODE_ENV;
const ROOT_PATH = path.resolve(__dirname);

var config = {
  entry: [
  ],
  module: {
    loaders: [
    ],
  },
  resolve: {
  },
}

if (ENV === 'production') {
  config = _.extend({}, config, {

  });
} else {
  config = _.extend({}, config, {

  });
}

module.exports = config;
