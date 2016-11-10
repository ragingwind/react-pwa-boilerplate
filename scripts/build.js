const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const configs = require('./configs');
const statsOptions = {
	chunks: false,
	colors: true
};

function build() {
	// Add addtitional packages
	configs.webpack.plugins.push(new SWPrecacheWebpackPlugin(configs.serviceWorker));

	return new Promise((resolve, reject) => {
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
}).catch(e => {
	console.log(e);
});
