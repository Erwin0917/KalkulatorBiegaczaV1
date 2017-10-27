const {resolve} = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

	entry: "./src/js/init.js",
	output: {
		path: resolve(__dirname, "app/"),
		filename: "[name].js"
	},

	devtool:  "source-map",

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["env", {
							  "targets": {
								"browsers": ["last 3 versions"]
							  }
							}]
						  ]
					}
				}
			},
			{
				test: /\.scss$/,
				/* use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				] */
				use: ExtractTextWebpackPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader"
				})
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/'
					}
				  }
				]
			}
		]
	},

	plugins: [
		new ExtractTextWebpackPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]

};