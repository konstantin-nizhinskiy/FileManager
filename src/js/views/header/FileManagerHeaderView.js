define([
        'marionette',
        'build/JST.FileManagerBundle',
        'translations/fmTrans'
    ],
    function(Marionette,JST,fmTrans) {
        return Marionette.ItemView.extend({
            _close:false,
            initialize:function(args){
                if('undefined'!==typeof args.close ){
                    this._close=args.close;
                }
            },
            ui:{
                fmHeaderCancel:'.fm-header-cancel'
            },
            events:{
                'click @ui.fmHeaderCancel':'fmHeaderCancel'
            },
            fmHeaderCancel:function(){
                this.trigger('fmHeaderCancel');
            },
            template: JST.FileManagerHeaderView,
            templateHelpers:function(){
                return {
                    fmTrans:fmTrans,
                    close:this._close
                }
            }

        });
    }
);
