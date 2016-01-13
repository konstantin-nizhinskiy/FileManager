define([],function() {

    var _fileManagerConfig={
            host:'/fm',
            maxFileSize:1048576, //1 MB max
            locale:'ru',
            typeViewContent:'menu' // menu/th
        },
        FileManagerConfig = function(){
            if('undefined' !==typeof localStorage){
                _fileManagerConfig.typeViewContent=localStorage.getItem('fm-typeViewContent')||'menu';
            }
        };

    /**
     *
     * @param args {object}
     * @param args.host {string} - url FileManager
     * @param args.maxFileSize {number} - max file size load
     * @param args.locale {string} - locale FileManager
     *
     */
    FileManagerConfig.prototype.init=function(args){
        if('undefined'!==typeof args.host) {
            _fileManagerConfig.host = args.host;
        }
        if('undefined'!==typeof args.maxFileSize) {
            _fileManagerConfig.maxFileSize = args.maxFileSize;
        }
        if('undefined'!==typeof args.locale) {
            _fileManagerConfig.locale = args.locale;
        }
    };
    /**
     * Get host FileManager
     * @return {string}
     */
    FileManagerConfig.prototype.getHost=function(){
        return _fileManagerConfig.host;
    };
    /**
     * Get max file size load
     * @return {number}
     */
    FileManagerConfig.prototype.getMaxFileSize=function(){
        return _fileManagerConfig.maxFileSize;
    };
    /**
     * Get locale FilManager
     * @return {string}
     */
    FileManagerConfig.prototype.getLocale=function(){
        return _fileManagerConfig.locale;
    };
    /**
     *
     * @return {string}
     */
    FileManagerConfig.prototype.getTypeViewContent=function(){
        return _fileManagerConfig.typeViewContent;
    };
    /**
     *
     * @param type {string}
     */
    FileManagerConfig.prototype.setTypeViewContent=function(type){
        _fileManagerConfig.typeViewContent=type;
        if('undefined' !==typeof localStorage){
            localStorage.setItem('fm-typeViewContent',type);
        }
    };
    return new FileManagerConfig();
});

