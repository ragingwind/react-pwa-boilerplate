const path = require('path');
const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const configs = require('./configs');

const statsOptions = {
	chunks: false,
	colors: true
};

function build() {
	// Add addtitional packages
	configs.webpack.plugins.push(new SWPrecacheWebpackPlugin(configs.serviceWorker));
	configs.webpack.plugins.push(new CopyWebpackPlugin([
		{context: configs.paths.public, from: '*.png'},
		{from: path.join(configs.paths.public, 'manifest.json')}
	]));

	// Add service worker register script into html
	configs.webpack.entry.sw = [path.join(configs.paths.app, 'sw-register.js')];

	return new Promise(resolve => {
		// Compile webpack and run dev server
		configs.webpack.stats = 'verbose';
		const compiler = webpack(configs.webpack);
		compiler.run((err, stats) => {
			if (err) {
				throw err;
			}

			resolve(stats);
		});
	});
}

build().then(stats => {
	console.log(stats.toString(statsOptions));
}).catch(err => {
	console.log(err);
});
