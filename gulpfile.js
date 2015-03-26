'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe($.webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
