var 
    gulp = require('gulp'),
    config = require('./config.js'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');
 gulp.task('build',['lint'], build);
 
function build(){
    return  gulp.src(config.sourceFolder + '/' + config.globs.js)
          .pipe(sourcemaps.init())
          .pipe(uglify())
          .pipe(concat(config.distFileName))
           .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.distFilder));
}