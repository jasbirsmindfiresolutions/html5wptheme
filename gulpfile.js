const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-concat');
const uglify = require('gulp-uglify');

const files = {
	sassPath: './sass/*.scss',
	cssPath: './css',
	jsLibPath: './js/lib/custom/*.js',
	jsPath: './js' 
}

function style(){
	return gulp.src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("theme.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest(files.cssPath));
}

function script(){
	return gulp.src(files.jsLibPath)
    .pipe(concatJs('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest(files.jsPath));
}

function watch(){
	gulp.watch(files.sassPath, gulp.series('style'));
	gulp.watch(files.jsLibPath, gulp.series('script'));
}

exports.style = style;
exports.script = script;
exports.default = watch;