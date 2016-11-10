const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const pkg = require('../package.json');

process.env.HOST = 'localhost';
process.env.PORT = 8080;

const paths = {
	public: 'public',
	app: path.resolve(__dirname, '../src'),
	build: path.resolve(__dirname, '../build')
};

const webpackConfig = {
	entry: {
		main: [path.join(paths.app, 'index.js')],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: paths.build,
		pathinfo: true,
		publicPath: '/',
		filename: '[name].[hash:8].js'
	},
	module: {
		loaders: [{
			test: /\.(js|jax)$/,
			enforce:'pre',
			loader: 'xo-loader',
			exclude: /node_modules/
		}, {
			test: /\.(js|jax)$/,
			include: paths.app,
			loaders: 'babel'
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
		new LoaderOptionsPlugin({
			options: {
				xo: {
					envs: ["browser"],
					extends: ["xo", "xo-react"],
					rules: {
						"quote-props": ["error", "as-needed"],
						'react/require-optimization': 0,
						"react/forbid-component-props": 0,
						"import/no-unresolved": 0, // temporary block errors
						"import/no-unassigned-import": 0
					}
				}
			}
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(paths.public, 'index.html'),
			favicon: path.join(paths.public, 'favicon.ico'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new CommonsChunkPlugin('commons.chunk.js')
	]
};

const webpackDevServerConfig = {
	contentBase: 'public',
	inline: true,
	host: process.env.HOST,
	port: process.env.PORT,
	serviceWorker: ''
};

const serviceWorkerConfig = {
	cacheId: pkg.name,
	filename: 'service-worker.js',
	staticFileGlobs: [
		path.join(paths.build, '**/*')
	],
	maximumFileSizeToCacheInBytes: 4194304,
	runtimeCaching: [{
		handler: 'cacheFirst',
		urlPattern: /https?:\/\/fonts.+/
	}],
	logger: function (a) {}
};

module.exports = {
	webpack: webpackConfig,
	webpackDevServer: webpackDevServerConfig,
	serviceWorker: serviceWorkerConfig,
	paths: paths,
};
