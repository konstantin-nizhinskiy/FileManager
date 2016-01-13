define([
        'marionette',
        'build/JST.FileManagerBundle',
        'FileManagerConfig',
        'translations/fmTrans'

    ],
    function(Marionette,JST,fileManagerConfig,fmTrans) {
        return Marionette.ItemView.extend({
            initialize:function(args){
                this.lastNamespace=args.lastNamespace||'/';
            },
            ui:{
                dropZone:'.fm-drop-zone',
                dropZoneMessage:'.fm-drop-zone-message',
                fileInput:'input[type=file]'
            },
            events:{
                'click @ui.dropZone':'dropZone',
                'change @ui.fileInput':'loadChangeFile'
            },
            loadChangeFile:function(atr){
                this.loadFile(atr.target.files[0]);
            },
            loadFile:function(file){
                if (file.size > fileManagerConfig.getMaxFileSize()) {
                    this.ui.dropZoneMessage.html(fmTrans.get('the.file.is.too.large'));
                    this.ui.dropZone.addClass('error');
                    return false;
                }
                var formData =new FormData (),
                    xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', this.uploadProgress.bind(this), false);
                xhr.onreadystatechange = this.stateChange.bind(this);
                xhr.open('POST', fileManagerConfig.getHost()+'/api/loadFile/');
                //xhr.setRequestHeader('X-FILE-NAME', file.name);
                //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                //xhr.setRequestHeader('X-FILE-NAMESPACE', this.lastNamespace);
                formData.append("file", file);
                formData.append("namespace", this.lastNamespace);
                xhr.send(formData);

            },
            dropZoneStart:function(){
                var _this=this,
                    dropZone = this.ui.dropZone;
                dropZone[0].ondragover = function() {
                    dropZone.addClass('hover');
                    return false;
                };
                dropZone[0].ondragleave = function() {
                    dropZone.removeClass('hover');
                    return false;
                };
                 dropZone[0].ondrop = function(event) {
                 event.preventDefault();
                 dropZone.removeClass('hover');
                 dropZone.addClass('drop');
                     var file = event.dataTransfer.files[0];
                     _this.loadFile(file);



                 };
            },
            uploadProgress:function(event){
                var percent = parseInt(event.loaded / event.total * 100);
                this.ui.dropZone.html(fmTrans.get('load')+': ' + percent + '%');

            },
            stateChange:function(e){
                if ( 4 == e.target.readyState ) {
                    this.trigger('folderView');
                }
            },
            onRender:function(){
                this.dropZoneStart()
            },
            template: JST.FileManagerLoadFileView,
            templateHelpers:function(){
                return {
                    fmTrans:fmTrans
                }
            }

        });
    }
);
