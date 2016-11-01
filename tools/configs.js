const path = require('path');
const webpack = require('webpack');

const paths = {
	appPath: path.resolve(__dirname, '../src'),
	appBuild: path.resolve(__dirname, '../build')
};

const webpackConfig = {
	entry: [
		path.join(paths.appPath, 'index.js')
	],
	output: {
		path: paths.appBuild,
		pathinfo: true,
		publicPath: '/',
		filename: 'build/index.js'
	},
	module: {
		loaders: [{
			test: /\.(js|jax)$/,
			include: paths.appPath,
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
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
			loader: 'file',
			query: {
				name: 'static/media/[name].[hash:8].[ext]'
			}
		}]
	}
};

module.exports = {
	webpack: webpackConfig,
	paths: paths
};
