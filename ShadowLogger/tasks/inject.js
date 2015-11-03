var gulp = require('gulp'),
config = require('./config.js'),
series = require('stream-series'),
inject = require('gulp-inject'),
bowerFile = require('main-bower-files');

gulp.task('inject', injectSources);

function injectSources(){
   var target = gulp.src(config.index);
  var modules = gulp.src(config.allModules, {read: false});
  var vendorSources = gulp.src(bowerFile());
 
  return target.pipe(inject(series(vendorSources, modules,appSources),{relative:true})) 
  .pipe(gulp.dest(config.exampleFolder));
  
}