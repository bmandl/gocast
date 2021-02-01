const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        index: './src/index.js',
        about: './src/about.js',
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
        new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            chunks: ['about'],
            filename: 'about.html',
            title: 'About me',
        }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
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