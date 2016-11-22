"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {
    usebanner: {
        js: {
            options: {
                position: 'top',
                banner: '/*<%= banner %>*/',
                linebreak: true
            },
            files: {
                src: [
                    'dist/js/*.js'
                ]
            }
        },
        css: {
            options: {
                position: 'top',
                banner: '/*<%= banner %>*/',
                linebreak: true
            },
            files: {
                src: [
                    'dist/css/*.css'
                ]
            }
        }
    }
};

