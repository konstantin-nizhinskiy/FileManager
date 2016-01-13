"use strict";

var gruntTasks = require('grunt-tasks');

module.exports = function(grunt) {
    var path = require('path');

    gruntTasks(grunt, {
        tasks: [
            'grunt/config/*/*.js',
            'grunt/tasks/*.js',
            'vendor/msb/kernel-wc/grunt/tasks/*.js',
            'vendor/msb/kernel-wc/grunt/config/kernelWC/*.js'
        ],  // this line could be omitted as this matches the default
        config: 'grunt/config/mainConfig.js',
        aliases: 'grunt/aliases.js'
    });

};