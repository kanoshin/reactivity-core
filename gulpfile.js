var gulp = require('gulp');
var Builder = require('systemjs-builder');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ".",
            middleware: [ historyApiFallback() ]
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('release-build', function() {
    var builder = new Builder();
    return builder.loadConfig('./config.js')
        .then(function() {
            return builder.loadConfig('./lib-template/custom-config.js');
        })
        .then(function() {
            return builder.bundle('lib-template/**/*.jsx', './build/bundle.js', {
                minify: true
            });
        });
});

gulp.task('dev-build', function() {
    var builder = new Builder();
    return builder.loadConfig('./config.js')
        .then(function() {
            return builder.loadConfig('./lib-template/custom-config.js');
        })
        .then(function() {
            return builder.bundle('lib-template/**/*.jsx - [lib-template/**/*.jsx] - [lib/**/*.jsx]', './build/bundle.js', {
                minify: true
            });
        });
});

gulp.task('serveit', ['browser-sync', 'dev-build'], function () {
    gulp.watch("index.html", ['bs-reload']);
    gulp.watch("lib/**/*.js", ['bs-reload']);
    gulp.watch("lib/**/*.jsx", ['bs-reload']);
    gulp.watch("lib-template/**/*.js", ['bs-reload']);
    gulp.watch("lib-template/**/*.css", ['bs-reload']);
    gulp.watch("lib-template/**/*.jsx", ['bs-reload']);
});

gulp.task('serveit-no-watch', ['browser-sync'], function () {
});