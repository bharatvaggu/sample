const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: path.join(__dirname, './src/index.jsx'),
	},
	output: {
		filename: 'bundle/[name].[hash].bundle.js',
		chunkFilename: 'bundle/[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
		}),
		new webpack.DefinePlugin({
			'BASEURL': JSON.stringify("localhost"),
			'VIEWURL': JSON.stringify("localhost")
		})
	],
	devServer: {
		contentBase: './dist',
		inline: true,
		historyApiFallback: true,
		// host:'10.0.0.133',
		// port:'8080',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
		]
	},
	resolve: {
		alias: {
			'jqwidgets-react': path.resolve(__dirname, 'src/jqwidgets-react/'),
			'components': path.resolve(__dirname, 'src/components/'),
			'routes': path.resolve(__dirname, 'src/routes/')
		}
	}
};
