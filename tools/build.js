const webpack = require('webpack');
const Configs = require('./configs');
const WebpackDevServer = require('webpack-dev-server');

console.log('configs.webpack', Configs.webpack);
process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = 'pubic';

function build() {
	webpack(Configs.webpack).run((err, stats) => {
		if (err) {
			console.log('err', err);
			process.exit(1);
		}

		console.log('done');
	});
}

function start() {
	Configs.webpack.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
	Configs.webpack.plugins = (Configs.webpack.plugins || []).concat([
		new webpack.HotModuleReplacementPlugin()
	]);

	const compiler = webpack(Configs.webpack);
	compiler.plugin('done', () => {

	});

	const devServer = new WebpackDevServer(compiler, {
		contentBase: 'public',
		inline: true,
		https: false,
		host:'localhost'
	});

	devServer.listen(8080, (err, res) => {
		if (err) {
			console.log('err', err);
			return;
		}

		console.log('open browser');
	})
}

start();
