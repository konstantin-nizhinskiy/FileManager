define([
        'marionette',
        'build/JST.FileManagerBundle',
        'FileManagerConfig',
        'translations/fmTrans'


    ],
    function(Marionette,JST,fileManagerConfig,fmTrans) {
        return Marionette.ItemView.extend({
            initialize:function(){

            },
            ui:{
                fmUserFileContent:'.fm-user-file-content',
                fmUserFile:'.fm-user-file',
                fmUserFileCheck:'.fm-user-file-check'
            },
            events:{
                'click @ui.fmUserFileContent':'fmUserFileContent',
                'mouseenter @ui.fmUserFile':'mouseOn',
                'mouseleave @ui.fmUserFile':'mouseOff',
                'click @ui.fmUserFileCheck':'fmUserFileCheck'
            },
            mouseOn:function(){
                this.ui.fmUserFileCheck.show();

            },
            mouseOff:function(){
                if(this.model.get('fileCheck')==false) {
                    this.ui.fmUserFileCheck.hide();
                }
            },
            fmUserFileContent:function(){
                this.model.trigger('selectContent',this.model);
            },
            fmUserFileCheck:function(){
                var fileCheck=this.model.get('fileCheck')||false;
                this.model.set('fileCheck',!fileCheck);
                this.render();

            },
            template: JST.FileManagerUserFileView,
            templateHelpers:function(){
                var _fileSize=this.model.get('fileSize'),
                    _dateLoad=this.model.get('dateLoad');
                if(_fileSize!==false){
                    if(_fileSize>1024){
                        _fileSize = (_fileSize/1024).toFixed(2)+' Kb'
                    }else{
                        _fileSize = _fileSize+' B'
                    }
                }
                if(_dateLoad.toString().length===10){
                    _dateLoad=_dateLoad.toString()+'000';
                    _dateLoad= new Date(parseFloat(_dateLoad));
                    _dateLoad=_dateLoad.toString();

                }
                return {
                    fmTrans:fmTrans,
                    typeViewContent:fileManagerConfig.getTypeViewContent(),
                    dateLoad:_dateLoad,
                    fileSize:_fileSize
                }
            }

        });
    }
);
