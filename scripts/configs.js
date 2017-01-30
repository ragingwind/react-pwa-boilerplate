const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const {LoaderOptionsPlugin} = require('webpack');
const pkg = require('../package.json');

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
			test: /\.(js|jsx)$/,
			include: paths.app,
			loaders: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.(ico|jpg|jpeg|png|gif)$/,
			loader: 'file?name=[path][name].[ext]'
		}]
	},
	plugins: [
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
		new CommonsChunkPlugin('commons.chunk.js'),
		new LoaderOptionsPlugin({
			options: {
				postcss: []
			}
		})
	]
};

const webpackDevServerConfig = {
	contentBase: 'public',
	inline: true,
	host: process.env.HOST || 'localhost',
	port: Number.parseInt(process.env.PORT || 8080, 10)
};

const serviceWorkerConfig = {
	cacheId: pkg.name,
	staticFileGlobs: [
		path.join(paths.build, '**/*')
	],
	maximumFileSizeToCacheInBytes: 4194304,
	runtimeCaching: [{
		handler: 'cacheFirst',
		urlPattern: /https?:\/\/fonts.+/
	}],
	logger: function () {},
	filename: '/sw.js'
};

module.exports = {
	webpack: webpackConfig,
	webpackDevServer: webpackDevServerConfig,
	serviceWorker: serviceWorkerConfig,
	paths: paths
};
