define([
        'marionette',
        'build/JST.FileManagerBundle',
        'FileManagerConfig',
        'translations/fmTrans'

    ],
    function(Marionette,JST,fileManagerConfig,fmTrans) {
        return Marionette.View.extend({
            initialize:function(args){
                this.lastNamespace=args.lastNamespace||'/';
            },
            ui:{
                fmNameFolder:'.fm-name-folder',
                save:'.fm-folder-save'
            },
            events:{
                'click @ui.save':'save'
            },
            save:function(){
            var _this=this;
                this.model.save({
                    lastNamespace:this.lastNamespace,
                    namespace:this.ui.fmNameFolder.val()
                    },{
                    success:function(){
                        _this.trigger('folderView');
                    }
                })
            },
            template: JST.FileManagerCreateFolderView,
            templateContext:function(){
                return {
                    fmTrans:fmTrans
                }
            }

        });
    }
);
