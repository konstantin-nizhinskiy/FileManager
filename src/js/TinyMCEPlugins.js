define(['tinyMCE', 'FileManager'], function (tinymce, fileManager,fmTrans) {
    tinymce.PluginManager.add('nks-file-manager', function (editor, url) {

        editor.addButton('nks-file-manager', {
           // url: 'mydialog.html',
            icon: ' icon-picture',
            onclick: function () {
                require(['translations/fmTrans'],function(fmTrans) {
                    editor.windowManager.open({
                        title: 'FileManager',
                        width: 500,
                        height: 150,
                        body: [
                            {
                                type: 'container',
                                classes: 'fm-tinymce-source',
                                items: [
                                    {
                                        type: 'label',
                                        name: 'source',
                                        text: fmTrans.get("source"),
                                        classes: 'fm-tinymce-name'

                                    },
                                    {
                                        classes: 'fm-tinymce-input',
                                        type: 'textbox',
                                        name: 'source',
                                        value: ''

                                    },
                                    {
                                        type: 'button',
                                        classes: 'fm-tinymce-button',
                                        icon: ' icon-folder-open',

                                        onclick: function () {
                                            var $dimensions = $('.mce-fm-tinymce-dimensions'),
                                                $source = $('.mce-fm-tinymce-source');
                                            fileManager.openFileManager();
                                            fileManager.once('selectFile', function (args) {

                                                $source.find('.mce-fm-tinymce-input').val(args.link);
                                                $dimensions.find('.mce-fm-tinymce-width').val(args.width);
                                                $dimensions.find('.mce-fm-tinymce-height').val(args.height);

                                            });


                                        }

                                    }
                                ]
                            },
                            {
                                type: 'container',
                                classes: 'fm-tinymce-dimensions',
                                items: [
                                    {
                                        type: 'label',
                                        name: 'dimensions',
                                        text: fmTrans.get("dimensions"),
                                        classes: 'fm-tinymce-name'

                                    },
                                    {

                                        classes: 'fm-tinymce-width',
                                        type: 'textbox',
                                        name: 'width'
                                    },
                                    {
                                        type: 'label',
                                        text: "X",
                                        classes: 'fm-tinymce-x'

                                    },
                                    {

                                        classes: 'fm-tinymce-height',
                                        type: 'textbox',
                                        name: 'height'
                                    }
                                ]
                            }


                        ],
                        onsubmit: function (e) {
                            editor.insertContent('<img src="' + e.data.source + '" height="' + e.data.height + '" width="' + e.data.width + '">');
                        }
                    });
                })
            }
        });

    });
});