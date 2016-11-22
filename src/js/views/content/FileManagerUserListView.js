define([
        'marionette',
        'build/JST.FileManagerBundle',
        'FileManagerConfig',
        'translations/fmTrans',
        'views/content/FileManagerUserFileView'


    ],
    function(Marionette,JST,fileManagerConfig,fmTrans,FileManagerUserFileView) {
        var CollectionView =  Marionette.CollectionView.extend({
                className:'fm-user-files',
                childView: FileManagerUserFileView,
                tagName:function(){
                    return (fileManagerConfig.getTypeViewContent() === 'th' ? 'tbody' : 'div')
                },
                childViewOptions:function() {
                    return {
                        tagName: (fileManagerConfig.getTypeViewContent() === 'th' ? 'tr' : 'div')
                    }
                },
                filter: function (child, index, collection) {
                    return child.get('namespace') === this.collection.lastNamespace;
                }
        });
        return Marionette.View.extend({
            initialize:function(){
                this.collection.fetch({
                });

            },

            ui:{
                fmBackFolder:'.fm-back-folder',
                fmNamespace:'.fm-namespace'
            },
            events:{
                'click @ui.fmBackFolder':'fmBackFolder'
            },
            regions:{
                'tBodyRegion':{
                    el: '[data-region=tbody]',
                    replaceElement: true

                }
            },
            collectionEvents:{
                "selectContent":"selectContent"
            },

            childViewContainer: ".fm-user-files",
            fmBackFolder:function(){
                var _this = this,
                    _namespace='',
                    _namespaceArray;
                if(this.collection.lastNamespace!='/') {
                    _namespaceArray = this.collection.lastNamespace.split('/');
                    _namespaceArray.splice(_namespaceArray.length-2,2);
                    _namespace=_namespaceArray.join('/');
                    this.collection.lastNamespace=_namespace+'/';
                    this.render();
                }
            },
            selectContent:function(model){
                if(model.get('isDir')===true){
                    this.collection.lastNamespace=model.get('namespace')+model.get('name')+'/';
                    this.render();
                }else{
                    this.triggerMethod('selectFile',model.toJSON())
                }

            },
            onRender:function(){
                this.showChildView('tBodyRegion', new CollectionView({
                    collection:this.collection
                }))
            },
            template: JST.FileManagerUserListView,
            templateContext:function(){
                var _lastNamespace=this.collection.lastNamespace;
                if(this.collection.lastNamespace!='/'){
                    _lastNamespace=_lastNamespace.split('/');
                    _lastNamespace.pop();
                    _lastNamespace.shift();
                    _lastNamespace=_lastNamespace.join(' / ');
                }


                return {
                    fmTrans:fmTrans,
                    lastNamespace:_lastNamespace,

                    typeViewContent:fileManagerConfig.getTypeViewContent()
                }
            }

        });
    }
);
