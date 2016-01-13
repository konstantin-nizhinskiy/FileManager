"use strict";

module.exports = {
    dev:[
        'jst',
        'sass'
    ],
    prod:[
        'dev',
        'requirejs:FileManager',
        'uglify:TinyMCEPlugins',
        'usebanner:js',
        'usebanner:css'
    ]

};
