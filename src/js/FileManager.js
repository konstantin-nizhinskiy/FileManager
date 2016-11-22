define([
        'jquery',
        'FileManagerConfig',
        'views/layout/FileManagerLayoutView',
        'views/layout/FileManagerLayoutModalView'
    ],
    function ($,
              fileManagerConfig,
              FileManagerLayoutView,
              FileManagerLayoutModalView) {

        var FileManager = function () {

        };
        /**
         * FileManager init config
         * @param args {object}
         * @param args.host {string} - url FileManager
         * @param args.maxFileSize {number} - max file size load
         * @param args.locale {string} - locale FileManager
         *
         */
        FileManager.prototype.init=function(args){
            fileManagerConfig.init(args)
        };
        /**
         * Get base layout view FileManager "FileManagerLayoutView"
         * @return {FileManagerLayoutView}
         */
        FileManager.prototype.getFileManager = function () {
            return new FileManagerLayoutView();
        };
        /**
         * Open modal FileManager "FileManagerLayoutModalView"
         * @return {FileManagerLayoutModalView}
         */
        FileManager.prototype.openFileManager = function () {
            var _this = this,
                fileManagerLayoutModalView = new FileManagerLayoutModalView();
            $('body').append(fileManagerLayoutModalView.render().el);
            fileManagerLayoutModalView.on('selectFile', function (args) {
                _this.trigger('selectFile', args);
                fileManagerLayoutModalView.remove();
            });
            return fileManagerLayoutModalView;
        };


        return _.extend(new FileManager(), Backbone.Events);
    });

