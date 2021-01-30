const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            /*{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },*/
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }

        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            title: 'GoCast',
        }),
    ],

    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        host: '127.0.0.1',
        inline: true,
        disableHostCheck: true,
        watchContentBase: true,
        watchOptions: {
            ignored: [
                path.resolve(__dirname, 'node_modules')
            ]
        }
    },
};