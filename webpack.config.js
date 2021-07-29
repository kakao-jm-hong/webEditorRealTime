const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",
    entry:{
        index : "./src/index.js",
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8080,
        hot: true,
        open: true,
        stats: {
          children: false, // Hide children information
          maxModules: 0 // Set the maximum number of modules to be shown
        }
      },
    plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // 3
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                presets: [
                "@babel/preset-env",
                "@babel/preset-react"
                ]
                }
            }]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development'
};