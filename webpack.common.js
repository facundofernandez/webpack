'use strict';

const path = require('path');
const webpack = require('webpack');

let entry = "./magma.js";
let output = "magma.min.js";

const config = {
    // Archivo/s de entrada a interactuar
    entry: entry,
    // Archivo de Salida
    output: {
        filename: output,
        path: path.resolve(__dirname, 'dist')
    },
    // Modulos para los loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;