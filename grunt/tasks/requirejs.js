"use strict";
var path = require('path'),
    grunt = require('grunt'),
    tosource = require('tosource');
module.exports = {
    usebanner: {
        MinHelpWC: {
            options: {
                position: 'top',
                banner: '/*<%= bannerWC %>*/',
                linebreak: true
            },
            files: {
                src: [
                    '<%= web %>js/WC.Help.<%= typeServer %>.js'
                ]
            }
        }
    },
    requirejs: {
        FileManager: {
            options : {

                exclude:[
                    'jquery',
                    'underscoreBase',
                    'backbone',
                    'marionette'

                ],
                shim:{
                    
                },
                paths:{

                    jquery: '../../bower_components/jquery/dist/jquery.min',
                    underscoreBase: '../../bower_components/underscore/underscore-min',
                    underscore: 'underscoreConfig',
                    backbone: '../../bower_components/backbone/backbone-min',
                    marionette: '../../bower_components/marionette/lib/backbone.marionette.min'

                },
                optimize: "uglify2",
                out: 'dist/js/FileManager.min.js',
                name:'FileManager',
                baseUrl:'src/js',
                pragmas: {
                    doExclude: true
                },
                skipModuleInsertion: false,
                optimizeAllPluginResources: true,
                removeCombined: false,
                findNestedDependencies: true,
                //Removes console.logs for production
                onBuildWrite: function (moduleName, path, contents) {
                    if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
                    return contents;
                }
            }
        }
    }
};
