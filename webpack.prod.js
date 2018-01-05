const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglifyJS = require('./lib/uglify');

module.exports = merge(common, 
    uglifyJS()
);