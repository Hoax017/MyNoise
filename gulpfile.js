var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    jsonMinify = require('gulp-json-minify'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');

gulp.task('default', function () {
	gulp.src('data.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('dist'))

    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify({mangle: false})))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});