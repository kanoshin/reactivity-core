var gulp = require('gulp');
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

gulp.task('serveit', ['browser-sync'], function () {
    gulp.watch("index.html", ['bs-reload']);
    gulp.watch("lib/**/*.js", ['bs-reload']);
    gulp.watch("lib/**/*.jsx", ['bs-reload']);
    gulp.watch("lib-template/**/*.js", ['bs-reload']);
    gulp.watch("lib-template/**/*.css", ['bs-reload']);
    gulp.watch("lib-template/**/*.jsx", ['bs-reload']);
});