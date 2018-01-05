'use strict';

const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = function(){
    return {
        plugins:[
             new MinifyPlugin({
                deadcode:false
             })
        ]
        
       
    }
};