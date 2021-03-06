var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    watch:true,
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    babel: {
        presets: ['es2015']
    },
    devtool: 'source-map'
}