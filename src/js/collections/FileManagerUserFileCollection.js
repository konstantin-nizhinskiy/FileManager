define(['backbone','underscore','FileManagerConfig','models/FileManagerUserFileModel'],
    function(Backbone,_,fileManagerConfig,FileManagerUserFileModel) {
    return Backbone.Collection.extend({
        url: function(){return fileManagerConfig.getHost() + '/api/userFile/'},
        model:FileManagerUserFileModel,
        lastNamespace:'/',
        comparator:function(a) {
            return !a.get('isDir')
        },
        getFolder:function(namespace){
            this.collection.where({namespace:namespace})
        }

    });
});