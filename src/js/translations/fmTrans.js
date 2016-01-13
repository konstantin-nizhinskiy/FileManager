define([
    'FileManagerConfig',
    'translations/en',
    'translations/ru',
    'translations/ua'
],function(fileManagerConfig,en,ru,ua) {
    var _func=function(){
       this.ua=ua;
       this.ru=ru;
       this.en=en;
    };
    _func.prototype.get=function(key){
        var locale=fileManagerConfig.getLocale();
        return (this[locale] && this[locale][key]?this[locale][key]:key)
    };
    return new _func()
});