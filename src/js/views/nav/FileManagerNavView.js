define([
        'marionette',
        'build/JST.FileManagerBundle',
        'translations/fmTrans'
    ],
    function(Marionette,JST,fmTrans) {
        return Marionette.View.extend({
            template: JST.FileManagerNavView,
            templateContext:function(){
                return {
                    fmTrans:fmTrans
                }
            }
        });
    }
);


