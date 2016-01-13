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
        return Marionette.LayoutView.extend({
            className:'fm-modal',
            initialize:function(){

            },
            template: JST.FileManagerLayoutModalView,

            regions: {

                header: ".FileManagerLayout-header-modal",
                content: ".FileManagerLayout-content-modal",
                footer: ".FileManagerLayout-footer-modal"



            },
            onRender:function(){

                var fileManagerLayoutView = new FileManagerLayoutView({
                    header:false
                    }),
                    fileManagerHeaderView=new FileManagerHeaderView({
                        close:true
                    });
                fileManagerHeaderView.once('fmHeaderCancel',this.remove.bind(this));
                this.content.show(fileManagerLayoutView);
                fileManagerLayoutView.on('selectFile',this.trigger.bind(this,'selectFile'));
                this.header.show(fileManagerHeaderView);
            }
        });
    }
);
