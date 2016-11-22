define([
        'marionette',
        'build/JST.FileManagerBundle',
        'translations/fmTrans'
    ],
    function(Marionette,JST,fmTrans) {
        return Marionette.View.extend({
            _close:false,
            initialize:function(args){
                if('undefined'!==typeof args.close ){
                    this._close=args.close;
                }
            },
            ui:{
                "close":"[data-bind=close]",
                fmHeaderCancel:'.fm-header-cancel'
            },
            triggers:{
              "click @ui.close":"fm:modal:close"
            },
            events:{
                'click @ui.fmHeaderCancel':'fmHeaderCancel'
            },
            fmHeaderCancel:function(){
                this.trigger('fmHeaderCancel');
            },
            template: JST.FileManagerHeaderView,
            templateContext:function(){
                return {
                    fmTrans:fmTrans,
                    close:this._close
                }
            }

        });
    }
);
