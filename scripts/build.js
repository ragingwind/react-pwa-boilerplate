const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const configs = require('./configs');

function build() {
	// Add addtitional packages
	configs.webpack.plugins.push(new SWPrecacheWebpackPlugin(configs.serviceWorker));

	return new Promise((resolve, reject) => {
		// Compile webpack and run dev server
		const compiler = webpack(configs.webpack);
		compiler.run(err => {
			if (err) {
				console.log('Have got an err', err);
				throw new Error(err);
			}

			resolve();
		});
	});
}

build().then(_ => {
	console.log('Build has been done');
});
