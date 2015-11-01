var 
    gulp = require("gulp"),
    config = require("./config.js"),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');
gulp.task('lint', function () {

   return  gulp.src(config.sourceFolder + "/" + config.globs.js)
          .pipe(jshint())
          .pipe(jshint.reporter(stylish));
});