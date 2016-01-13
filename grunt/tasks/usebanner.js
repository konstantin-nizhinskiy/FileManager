"use strict";
var path = require('path'),
    YAML = require('yamljs'),
    tosource = require('tosource'),
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

