define([
        'marionette',
        'build/JST.FileManagerBundle',
        'views/nav/FileManagerNavView',
        'views/header/FileManagerHeaderView',
        'views/content/FileManagerContentView'



    ],
    function(
        Marionette,
        JST,
        FileManagerNavView,
        FileManagerHeaderView,
        FileManagerContentView

        ) {
        return Marionette.LayoutView.extend({
            _header:true,
            initialize:function(args){
                if('undefined'!==typeof args.header ){
                    this._header=args.header;
                }
            },
            template: JST.FileManagerLayoutView,

            regions: {
                header: ".FileManagerLayout-header",
                nav: ".FileManagerLayout-nav",
                content: ".FileManagerLayout-content",
                footer: ".FileManagerLayout-footer"

            },
            onRender:function(){
                var fileManagerNavView = new FileManagerNavView(),
                    fileManagerHeaderView = new FileManagerHeaderView(),
                    fileManagerContentView = new FileManagerContentView();
                this.nav.show(fileManagerNavView);
                if(this._header===true) {
                    this.header.show(fileManagerHeaderView);
                }

                fileManagerContentView.on('selectFile',this.trigger.bind(this,'selectFile'));
                this.content.show(fileManagerContentView);
            }
        });
    }
);
