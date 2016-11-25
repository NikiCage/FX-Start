
module.exports = function(grunt) {

    var  config = {
        clean: ['src/assets/_icon-font/icons-*'],
        webfont : {
            icons: {
                src: 'icons/src/*.svg',
                dest: 'src/assets/_icon-font',
                destCss: 'src/styles/assets',
                options: {
                    font: 'icomoon',
                    fontFilename: 'icons-{hash}',
                    types: ['woff','ttf','svg','eot'],
                    order: ['woff','ttf','svg','eot'],
                    syntax: 'icomoon',
                    codepointsFile : "icons/codepoints.json",
                    relativeFontPath : '../assets/_icon-font',
                    destHtml : 'icons/test',
                    template : 'icons/templates/icomoon.scss',
                    stylesheet : 'scss',
                    version : '1.0'
                }
            }
        }
    };
    // Задачи

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Задача по умолчанию
    grunt.registerTask('default', ['clean','webfont']);
};