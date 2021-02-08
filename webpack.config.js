const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

const devMode = process.env.MODE != 'production';

module.exports = {
    watch: true,
    mode: process.env.MODE,
    entry: {
        index: './src/pages/Home/index.js',
        //about: './src/about.js',
        //episodes: './src/episodes.js',
        //blog: './src/blog.js',
        //post: './src/post.js',
        //contact: './src/contact.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(sc|sa|c|le)ss$/i,
                use: [devMode ? 'style-loader' : {loader: MiniCssExtractPlugin.loader,options:{publicPath:''}}, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',                    
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
        /*new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            chunks: ['about'],
            filename: 'about.html',
            title: 'About me',
        }),
        new HtmlWebpackPlugin({
            template: './src/episodes.html',
            inject: true,
            chunks: ['episodes'],
            filename: 'episodes.html',
            title: 'Episodes',
        }),
        new HtmlWebpackPlugin({
            template: './src/blog.html',
            inject: true,
            chunks: ['blog'],
            filename: 'blog.html',
            title: 'Blog',
        }),
        new HtmlWebpackPlugin({
            template: './src/post.html',
            inject: true,
            chunks: ['post'],
            filename: 'post.html',
            title: 'Post',
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            inject: true,
            chunks: ['contact'],
            filename: 'contact.html',
            title: 'Contact',
        }),*/
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        port: 3000,
        host: '0.0.0.0',
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