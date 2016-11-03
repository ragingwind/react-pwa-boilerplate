const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

process.env.NODE_ENV = 'development';
process.env.HOST = 'localhost';
process.env.PORT = 8080;

const paths = {
	public: 'public',
	app: path.resolve(__dirname, '../src'),
	build: path.resolve(__dirname, '../build')
};

const webpackConfig = {
	entry: [
		path.join(paths.app, 'index.js')
	],
	output: {
		path: paths.build,
		pathinfo: true,
		publicPath: '/',
		filename: '[name].[hash:8].js'
	},
	module: {
		loaders: [{
			test: /\.(js|jax)$/,
			include: paths.app,
			loaders: 'babel',
			query: {
				presets: [require.resolve('babel-preset-react-app')],
			}
		}, {
			test: /\.css$/,
			loader: 'style!css!postcss'
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(ico|jpg|jpeg|png|gif)$/,
			loader:'file-loader?name=[path][name].[ext]'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.public, 'index.html'),
			favicon: path.join(paths.public, 'favicon.ico')
		})
	]
};

const webpackDevServerConfig = {
	contentBase: 'public',
	inline: true,
	host: process.env.HOST,
	port: process.env.PORT,
	serviceWorker: '',
	setup: function(app) {
		app.get('/service-worker.js', (req, res) => {
			res.status(200)
				 .set('Content-Type', 'application/javascript')
				 .send(this.serviceWorker);
		});
	}
};

const serviceWorkerConfig = {
	cacheId: pkg.name,
	filename: 'service-worker.js',
	staticFileGlobs: [
		path.join(paths.build, '**/*')
	],
	maximumFileSizeToCacheInBytes: 4194304,
	stripPrefix: paths.build,
	runtimeCaching: [{
		handler: 'cacheFirst',
		urlPattern: /https?:\/\/fonts.+/
	}],
	verbose: false
};

module.exports = {
	webpack: webpackConfig,
	webpackDevServer: webpackDevServerConfig,
	serviceWorker: serviceWorkerConfig,
	paths: paths,
};
