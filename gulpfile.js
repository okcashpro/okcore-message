'use strict';

var gulp = require('gulp');
var okcoreTasks = require('okcore-build');

okcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
