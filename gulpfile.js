var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
    scripts: ['js/**/*'],
    images: 'img/**/*',
    stylesheets: 'css/**/*',
    dist: 'dist'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([paths.dist]);
});
gulp.task('cleanjs', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([paths.dist + '/js']);
});
gulp.task('cleanimg', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([paths.dist + '/img']);
});
gulp.task('cleancss', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([paths.dist + '/css']);
});

gulp.task('scripts', ['cleanjs'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('ms.min.js'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist + '/js'));
});

gulp.task('stylesheets', ['cleancss'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.stylesheets)
        // .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('ms.min.css'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist + '/css'));
});

// Copy all static images
gulp.task('images', ['cleanimg'], function() {
    return gulp.src(paths.images)
    // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(paths.dist + '/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.stylesheets, ['stylesheets']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'stylesheets', 'images']);