'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function browserSyncInit(baseDir, browser)
{
    browser = browser === undefined ? 'default' : browser;

    var server = {
        baseDir: baseDir,
        routes : {
            '/bower_components': 'bower_components'
        }
    };

    browserSync.instance = browserSync.init({
        startPath: '/',
        server   : server,
        browser  : browser
    });
}

gulp.task('serve', ['watch'], function ()
{
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src], conf.browser.default);
});

gulp.task('serve:dist', ['build'], function ()
{
    browserSyncInit(conf.paths.dist, conf.browser.default);
});