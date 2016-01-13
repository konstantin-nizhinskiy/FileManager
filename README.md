FileManager
===========
 * [download](./#Download)
 * [config](./#Config)
 * [methods](./#Methods)
 * [events](./#Methods)
 * [tinyMCE](./#tinyMCE)
 * [api](./#Api)
 * [example](./#Example)
 * [demo](./#DEMO)
 

## Download
```sh
  bower install nks-file-manager;
  git clone https://github.com/konstantin-nizhinskiy/FileManager;
```
## Config
```js
require(['FileManager'],function(fileManager)
    fileManager.init({
        'host':'fm', //url api FileManager
        'maxFileSize':'1048576', //max(byte) file size load
        'locale':'ru'//locale FileManager
    });
});
```
## Methods
 * init - FileManager init config
 * getFileManager - Get base layout view FileManager  return "FileManagerLayoutView"
 * openFileManager - Open modal FileManager "FileManagerLayoutModalView"

## Events 
 * selectFile - select file in modal view return param:
    * id - keys
    * isDir - file(folder) false/true
    * name - name file(folder) 
    * typeFile - type file
    * dateLoad - date create file(folder)
    * fileSize - file size
    * namespace - user namespace
    * width - width img
    * height - height img
    * link - web link file(folder)

## tinyMCE
```js
    tinymce.init({
        selector:'textarea',
        plugins: 'nks-file-manager',
        toolbar: 'nks-file-manager'
    });
```
## Api
   * [Symfony bundle](https://github.com/konstantin-nizhinskiy/FileManagerBundle)
### all api url
 * Get all collection user file:
    * Route:   {{host}}/api/userFile/
    * Method:  GET
    * return: json collection
        * id - keys
        * isDir - file(folder) false/true
        * name - name file(folder) 
        * typeFile - type file
        * dateLoad - date create file(folder)
        * fileSize - file size
        * namespace - user namespace
        * width - width img
        * height - height img
        * link - web link file(folder)
 * Delete file(folder):
    * Route:   {{host}}/api/userFile/{id}
    * Method:  DELETE
 * Create folder:
    * Route:   {{host}}/api/createFolder/
    * Method:  POST
    * params: 
      * lastNamespace - now open folder
      * namespace - name new folder
    * return json {}
 * Load file to file manager (sent form object):
    * Route:   {{host}}/api/loadFile/
    * Method:  POST
    * params:
        * namespace - now open folder
        * file - <input type="file">
## Example
#### open file manager in modal view 
```html
<!-- ... -->
    <link rel="stylesheet" type="text/css" href="/css/FileManager.min.css">
    <script src="/js/require.js"  type="text/javascript"></script>
    <script>
        require([
                'FileManager'
                ],
                function(fileManager) {
                     fileManager.init({
                          'host':'fm'
                     });
                     fileManager.openFileManager();
                     fileManager.on('selectFile',function(args){
                        console.log(args.link)
                     });
                });
    </script>
<!-- ... -->    
```
#### example tinyMCE 
```html
<!-- ... -->
    <link rel="stylesheet" type="text/css" href="/css/FileManager.min.css">
    <script src="/js/require.js"  type="text/javascript"></script>
    <script>
        require([
                'FileManager',
                'TinyMCEPlugins'
                ],
                function(fileManager) {
                     fileManager.init({
                          'host':'fm'
                     });
                     tinymce.init({
                         selector:'textarea',
                         plugins: 'nks-file-manager',
                         toolbar: 'nks-file-manager'
                     });
                });
    </script>
<!-- ... -->    
```

## DEMO
#### file manager
![Alt text](/doc/menu.png)
![Alt text](/doc/th.png)
#### file manager load
![Alt text](/doc/loadFile.png)
#### file manager modal view
![Alt text](/doc/modal.png)
#### file manager tinyMCE plugin
![Alt text](/doc/tinyMCE.png)
