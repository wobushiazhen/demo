const path = require('path');
const webpack = require('webpack'); // 访问内置的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // entry: './main.js',
    entry:{ 
        app:'./main.js',
        app2:'./main2.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: './',   
        assetModuleFilename: 'images/[hash][ext][query]',
    },    
    plugins: [
        new htmlWebpackPlugin({
            template: './1.html', // 原始 HTML 模板
            filename: 'index1.html', // 编译后生成的 HTML 文件
            chunks: ['manifest', 'vendor', 'app'] 
        }),
        new htmlWebpackPlugin({
            template: './2.html', // 原始 HTML 模板
            filename: 'index2.html', // 编译后生成的 HTML 文件
            chunks: ['manifest', 'vendor', 'app2'] 
        }),
        new MiniCssExtractPlugin({}),  // 可以将css单独提取到单独的文件中，它为每个包含css的js文件创建一个css文件。他支持css和sourceMap的按需加载
        new webpack.ProgressPlugin(),   
    ],  
    module: { // 加载器
        rules: [  // 规则列表
            {
                test: /\.css$/i, // 匹配以 .css 后缀结尾的文件
                use: ['style-loader', 'css-loader'] // 使用从后到钱的加载器来解析css代码和插入到dom
            },
            {
                test: /\.scss$/i, // 匹配以 .css 后缀结尾的文件
                use: ['css-loader','sass-loader'] // 使用从后到钱的加载器来解析css代码和插入到dom
            }  
        ]
    },


    // 优化
    optimization: {
        minimize: true, 
        minimizer: [new CssMinimizerPlugin()], // 启用 CSS 最小化器
    },  
    mode: 'development' // 开发模式
}  