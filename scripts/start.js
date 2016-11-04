const path = require('path');
const crypto = require('crypto');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const swPrecache = require('sw-precache');
const configs = require('./configs');

process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = 'pubic';

function hash(data) {
	const md5 = crypto.createHash('md5');
	return md5.update(data).digest('hex');
}

function precache(state) {
	// console.log('configs.sw', configs.serviceWorker);
	configs.serviceWorker.staticFileGlobs = [];
	return swPrecache.generate(configs.serviceWorker).then(sw => {
		const caches = Object.keys(state.compilation.assets).map(v => {
			return `[\'${v}\', \'${hash(v)}\']`;
		});

		const timestamp = `// Manipulated for WebpackDevServer at ${new Date()}\n`;
		configs.webpackDevServer.serviceWorker = sw.replace(/var precacheConfig = \[.*\];\n/,
				`${timestamp}var precacheConfig = [${caches.join(', ')}]\n`);

		return configs;
 });
}

function run(configs) {
	return new Promise((resolve, reject) => {
		const compiler = webpack(configs.webpack);
		const devServer = new WebpackDevServer(compiler, configs.webpackDevServer);

		compiler.plugin('done', resolve);
		compiler.plugin('failed', reject);

		devServer.listen(configs.webpackDevServer.port, (err, res) => {
			if (err) {
				throw new Error(err);
			}
		});
	});
}

function start() {
	// Add addtitional packages
	configs.webpack.entry.main.unshift("webpack-dev-server/client?http://localhost:8080/");
	configs.webpack.plugins.push(new webpack.HotModuleReplacementPlugin());

	// Compile webpack and run dev server
	return run(configs).then(precache);
}

start().then(_ => {
	console.log(`Server has been started with port: ${configs.webpackDevServer.port}`);
}).catch(e => {
	console.log('Have got an error', e);
});
