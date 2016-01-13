"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {

    sass: {
        dist: {
            options: {
                style: 'compressed',
                sourcemap: 'none',
                noCache:true
            },
            files: [{
                expand: true,
                cwd: 'src/css',
                src: ['FileManager.scss'],
                dest: 'dist/css/',
                ext: '.min.css'
            }]
        }
    }
};
