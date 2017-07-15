module.exports = {
	devtool: '#inline-source-map',
	entry: {
		app: ['babel-polyfill', './index.js']
	},
	output: {
		path: './',
		filename: '[name]-bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				loader: 'babel'
			}
		]
	}
};
