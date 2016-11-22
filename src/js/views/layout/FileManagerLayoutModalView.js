define([
        'marionette',
        'build/JST.FileManagerBundle',
        'views/layout/FileManagerLayoutView',
        'views/header/FileManagerHeaderView'



    ],
    function(
        Marionette,
        JST,
        FileManagerLayoutView,
        FileManagerHeaderView

        ) {
        return Marionette.View.extend({
            className:'fm-modal file-manager-main',
            initialize:function(){
            },
            template: JST.FileManagerLayoutModalView,
            childViewTriggers:{
              'selectFile':'selectFile'
            },
            childViewEvents:{
                'fm:modal:close':'remove'
            },
            regions: {
                headerRegion: "[data-region=header]",
                contentRegion: "[data-region=content]",
                footerRegion: "[data-region=footer]"
            },

            onRender:function(){
                var fileManagerLayoutView = new FileManagerLayoutView({
                        header:false
                    }),
                    fileManagerHeaderView=new FileManagerHeaderView({
                        close:true
                    });
                this.showChildView('contentRegion',fileManagerLayoutView);
                this.showChildView('headerRegion',fileManagerHeaderView);
            }
        });
    }
);
