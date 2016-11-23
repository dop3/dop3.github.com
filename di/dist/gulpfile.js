"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    gulp.src('js/main.js')
        .pipe(browserSync.stream());
});

gulp.task('css',function () {
    gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())
});

gulp.task("watch", function (){
    browserSync.init({
        server: "."
    });
    gulp.watch("sass/**/*.scss", ["css"]);
    gulp.watch('index.html', ['html']);
    gulp.watch('js/main.js', ['js'])
});

gulp.task('default', ['css', 'html','js','watch']);
