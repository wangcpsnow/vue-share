var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }]
    }
}