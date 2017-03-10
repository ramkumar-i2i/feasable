(function (r) {
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'webapp/sass/**/*.scss',  
    cssDest = 'webapp/css/';


gulp.task('sass', function () {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassFiles, ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
})(require)