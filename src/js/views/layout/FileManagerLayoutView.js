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
        return Marionette.View.extend({
            className:'file-manager-main',
            _header:true,
            initialize:function(args){
                if('undefined'!==typeof args.header ){
                    this._header=args.header;
                }
            },
            childViewTriggers:{
                "selectFile":"selectFile"
            },
            template: JST.FileManagerLayoutView,

            regions: {
                headerRegion: "[data-region=header]",
                navRegion: "[data-region=nav]",
                contentRegion: "[data-region=content]",
                footerRegion: "[data-region=footer]"

            },
            onRender:function(){
                var fileManagerNavView = new FileManagerNavView(),
                    fileManagerHeaderView = new FileManagerHeaderView(),
                    fileManagerContentView = new FileManagerContentView();
                this.showChildView('navRegion',fileManagerNavView);
                if(this._header===true) {
                    this.showChildView('headerRegion',fileManagerHeaderView);
                }

                //fileManagerContentView.on('selectFile',this.trigger.bind(this,'selectFile'));
                this.showChildView('contentRegion',fileManagerContentView);
            }
        });
    }
);
