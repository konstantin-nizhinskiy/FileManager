"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {

    jst: {

        FileManager: {
            options: {
                namespace: 'WC.JSTFileManager',
                prettify: true,
                templateSettings: {
                    evaluate: /\{\{(.+?)\}\}/g,
                    interpolate: /\{\{=(.+?)\}\}/g,
                    escape: /\{\{-(.+?)\}\}/g
                },
                amd: true,
                processContent: function (src) {
                    return src.replace(/(^\s+|\s+$)/gm, '');
                },

                processName: function (filepath) {
                    console.log(path.basename(filepath, '.ejs'));
                    return path.basename(filepath, '.ejs');
                }

            },
            files: {
                'src/js/build/JST.FileManagerBundle.js': [
                    'src/tpl/*/*.ejs'
                ]

            }
        }

    }
};
