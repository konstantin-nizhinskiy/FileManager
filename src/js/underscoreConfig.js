define(['underscoreBase'], function(_) {
    _.templateSettings = {
        evaluate:    /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    };
    return _;
});