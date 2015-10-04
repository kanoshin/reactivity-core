var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('serveit', ['browser-sync'], function () {
    gulp.watch("src/**/*.html", ['bs-reload']);
    gulp.watch("src/**/*.js", ['bs-reload']);
    gulp.watch("src/**/*.css", ['bs-reload']);
});