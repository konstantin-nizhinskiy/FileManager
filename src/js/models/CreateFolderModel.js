define(['backbone','FileManagerConfig'],function(Backbone,fileManagerConfig) {
    return Backbone.Model.extend({
        url: function(){return fileManagerConfig.getHost() + '/api/createFolder/'}
    });
});