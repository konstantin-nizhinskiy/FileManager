define(['backbone','underscore','FileManagerConfig'],function(Backbone,_,fileManagerConfig) {
    return Backbone.Model.extend({
        urlRoot: function(){return fileManagerConfig.getHost() + '/api/userFile/'},
        defaults:{
            fileCheck:false
        }


    });
});