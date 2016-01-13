"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {
    uglify: {
        options: {
            compress: {
                drop_console: true
            }
        },
        TinyMCEPlugins: {
            files: {
                'dist/js/TinyMCEPlugins.min.js':[
                    'src/js/TinyMCEPlugins.js'
                ]



            }
        }
    }
};
