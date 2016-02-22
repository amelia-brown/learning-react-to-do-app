var express = require('express');
var path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const ROOT_PATH = path.resolve(__dirname);

const app = express();

app.set('view engine', 'jade');
app.set('views', path.join(ROOT_PATH, 'views'));

if (ENV === 'production') {
  app.use('/lib', express.static(path.join(ROOT_PATH, 'lib')));
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require("webpack-hot-middleware")(compiler));
}

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(PORT, function(error) {
  if (error) return console.log('ERROR', error);

  console.log(`Server listening on port ${PORT}`);
});
