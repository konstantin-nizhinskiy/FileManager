define([
        'marionette',
        'build/JST.FileManagerBundle',
        'views/content/FileManagerLoadFileView',
        'views/content/FileManagerUserListView',
        'views/content/FileManagerCreateFolderView',
        'translations/fmTrans',
        'collections/FileManagerUserFileCollection',
        'models/CreateFolderModel',
        'FileManagerConfig'
    ],
    function(
        Marionette,
        JST,
        FileManagerLoadFileView,
        FileManagerUserListView,
        FileManagerCreateFolderView,
        fmTrans,
        FileManagerUserFileCollection,
        CreateFolderModel,
        fileManagerConfig
    ) {
        return Marionette.View.extend({
            initialize:function(){
                /*this.on('all',console.warn)*/

            },
            ui:{
                fmPanelBtn:'.fm-panel-btn',
                createFolder:'.create-folder',
                folderView:'.folder-view',
                loadFile:'.load-file',
                selectRemove:'.select-remove',
                viewTh:'.view-th',
                viewMenu:'.view-menu',
                content:'[data-content]'
            },
            childViewTriggers:{
              'selectFile':'selectFile'
            },
            regions:{
                contentRegion:'[data-region=content]'
            },
            events:{
                'click @ui.createFolder':'createFolder',
                'click @ui.folderView':'folderView',
                'click @ui.loadFile':'loadFile',
                'click @ui.selectRemove':'selectRemove',
                'click @ui.viewTh':'viewTh',
                'click @ui.viewMenu':'viewMenu'
            },
            folderView:function(){
                var _lastNamespace='/';
                if(this.fileManagerUserFileCollection ){
                    _lastNamespace=this.fileManagerUserFileCollection.lastNamespace;
                }
                this.fileManagerUserFileCollection=new FileManagerUserFileCollection();
                this.fileManagerUserFileCollection.lastNamespace=_lastNamespace;
                this.fileManagerUserFileCollection.off('change:fileCheck');
                this.fileManagerUserFileCollection.on('change:fileCheck',this.fileCheck.bind(this));
                this.ui.fmPanelBtn.find('a').removeClass('active');
                this.ui.folderView.addClass('active');
                var fileManagerUserListView= new FileManagerUserListView({
                    collection:this.fileManagerUserFileCollection
                });
                //fileManagerUserListView.on('selectFile',this.trigger.bind(this,'selectFile'));
                this.showChildView('contentRegion',fileManagerUserListView)
                //this.ui.content.html(fileManagerUserListView.render().el);
                this.fileCheck();
            },
            createFolder:function(){

                this.ui.fmPanelBtn.find('a').removeClass('active');
                this.ui.createFolder.addClass('active');
                var fileManagerCreateFolderView= new FileManagerCreateFolderView({
                    lastNamespace:this.fileManagerUserFileCollection.lastNamespace||'',
                    model:new CreateFolderModel()

                });
                this.showChildView('contentRegion',fileManagerCreateFolderView)
                //this.ui.content.html(fileManagerCreateFolderView.render().el);
                fileManagerCreateFolderView.once('folderView',this.folderView.bind(this))
            },
            loadFile:function(){
                this.ui.fmPanelBtn.find('a').removeClass('active');
                this.ui.loadFile.addClass('active');
                var fileManagerLoadFileView= new FileManagerLoadFileView({
                    lastNamespace:this.fileManagerUserFileCollection.lastNamespace||''
                });
                this.showChildView('contentRegion',fileManagerLoadFileView)
                //this.ui.content.html(fileManagerLoadFileView.render().el);
                fileManagerLoadFileView.once('folderView',this.folderView.bind(this));

            },
            selectRemove:function(){
                var _this=this;
                _.each(this.fileManagerUserFileCollection.where({'fileCheck':true}),function(model){
                    model.destroy({
                        success:function(){
                            _this.fileCheck();
                        }
                    });
                });

            },
            viewTh:function(){
                fileManagerConfig.setTypeViewContent('th');
                this.render();
            },
            viewMenu:function(){
                fileManagerConfig.setTypeViewContent('menu');
                this.render();
            },
            fileCheck:function(){
              if(this.fileManagerUserFileCollection.where({fileCheck:true}).length>0){
                  this.ui.selectRemove.show();
              }else{
                  this.ui.selectRemove.hide();
              }
            },
            onRender:function(){
                this.folderView();
                this.fileCheck();
            },
            template: JST.FileManagerContentView,
            templateContext:function(){
                return {
                    fmTrans:fmTrans
                }
            }

        });
    }
);
