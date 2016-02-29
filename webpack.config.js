var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');
var atImport = require('postcss-import');
var precss = require('precss');
var calc = require('postcss-calc');
var cssnext = require('postcss-cssnext');
var normalize = require('postcss-normalize');

const ENV = process.env.NODE_ENV;
const ROOT_PATH = path.resolve(__dirname);

var config = {
  context: ROOT_PATH,
  entry: [
    path.join(ROOT_PATH, 'src'),
  ],
  output: {
    path: path.join(ROOT_PATH, 'lib'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/lib/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        key: 'css',
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?syntax=postcss-scss',
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000',
        include: /src/
      },
    ]
  },
  postcss: function() {
    return [
      atImport({
        path: [
          'node_modules',
          'client',
        ],
        addDependencyTo: webpack,
      }),
      calc,
      precss,
      normalize,
      cssnext
    ];
  },
  progress: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: path.join(ROOT_PATH, 'src'),
    moduleDirectories: [
      'node_modules',
      'src'
    ],
  },

}

if (ENV === 'production') {
  config = _.extend({}, config, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ],
  });
} else {
  config = _.extend({}, config, {
    entry: config.entry.concat([
      'webpack-hot-middleware/client',
    ]),
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
  });
}

module.exports = config;
