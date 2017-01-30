const path = require('path');
const crypto = require('crypto');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const SWPrecacheDevWebpackPlugin = require('sw-precache-webpack-dev-plugin');
const argv = require('minimist')(process.argv.slice(2));
const configs = require('./configs');

process.env.PUBLIC_URL = 'pubic';

function start() {
	// Add addtitional packages
	configs.webpack.entry.main.unshift('webpack-dev-server/client?http://localhost:8080/');
	configs.webpack.plugins.push(new webpack.HotModuleReplacementPlugin());

	// Enable service worker while app running on dev server
	if (argv.sw) {
		// Add service worker register script into html
		configs.webpack.entry.sw = [path.join(configs.paths.app, 'sw-register.js')];

		// Add service worker precache generator
		configs.webpack.plugins.push(new SWPrecacheDevWebpackPlugin(configs.serviceWorker));
	}
}

start();
const compiler = webpack(configs.webpack);
const devServer = new WebpackDevServer(compiler, configs.webpackDevServer);
devServer.listen(configs.webpackDevServer.port, err => {
	if (err) {
		throw err;
	}

	console.log(`Server has been started with port: ${configs.webpackDevServer.port}`);
});
