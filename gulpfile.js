var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var notify = require('gulp-notify');


// html source
var htmlFile = "./source/index.html";

// html destino
var htmlDest = "./dist/";

// sass source
var scssFile = "./source/scss/style.scss";

// css
var cssDest = "./dist/css/";

//css minificado
gulp.task('sass', function() {
    return gulp.src(scssFile)
    	.pipe(sass({outputStyle:'compressed'})).on("error", notify.onError("Error: <%= error.message %>"))
    	.pipe(rename('style.min.css'))
    	.pipe(gulp.dest(cssDest))
});


// html minificado 
gulp.task('html', function() {
    return gulp.src(htmlFile)
    	.pipe(htmlmin({collapseWhitespace:true})).on("error", notify.onError("Error: <%= error.message %>"))
    	.pipe(gulp.dest(htmlDest))
});


// assistindo as mudanças no sass e html
gulp.task('watch', function() {
	gulp.watch(htmlFile, ['html']);
	gulp.watch(scssFile, ['sass']);
});


// default
gulp.task('default',['sass', 'html', 'watch'], function() {});