define([
        'marionette',
        'build/JST.FileManagerBundle',
        'translations/fmTrans'
    ],
    function(Marionette,JST,fmTrans) {
        return Marionette.ItemView.extend({
            template: JST.FileManagerNavView,
            templateHelpers:function(){
                return {
                    fmTrans:fmTrans
                }
            }
        });
    }
);


