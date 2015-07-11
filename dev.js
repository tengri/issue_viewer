var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var config = require('./config.dev');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(config.port, config.url, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at ' + config.url + ' :'+ config.port);
    });
