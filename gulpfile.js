var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var templateCache = require('gulp-angular-templatecache');

gulp.task('useref', function () {
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('wwwroot'))
});

gulp.task('template', function () {
  return gulp.src('src/pages/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('wwwroot/pages'));
});