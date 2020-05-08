const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');

const files = {
	sassPath: './sass/*.scss',
	cssPath: './css'
}

function style(){
	return gulp.src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("theme.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest(files.cssPath));
}

function watch(){
	gulp.watch(files.sassPath, gulp.series('style'));
}

exports.style = style;
exports.watch = watch;