// dependencies ================================
var
  babelify    = require('babelify')
, gulp        = require('gulp')
, less        = require('gulp-less')
, minify      = require('gulp-minify-css')
, rename      = require('gulp-rename')
, react       = require('gulp-react')
, gutil       = require('gulp-util')
, source      = require('vinyl-source-stream')
, browserify  = require('browserify')

// browserify ==================================
gulp.task('browserify', function () {
  browserify('./source/app/index.jsx')
  .transform('babelify', 
    {presets: ['es2015', 'react']},
    {blacklist: ['strict']},
    {plugins: ['transform-object-rest-spread']}
  )
  .bundle()
  .on('error', function(err){
    gutil.log(err)
  })
  .pipe(source('app.js'))
  .pipe(gulp.dest('./public/js'))
})

// less ========================================
gulp.task('less', function () {
  gulp.src('./source/less/styles.less')
  .pipe(less())
  .pipe(gulp.dest('./public/css'));  
})

// minify =======================================
gulp.task('minify', function () {
  gulp.src('./public/css/styles.css')
  .pipe(minify({keepBreaks:false}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./public/css/'));
})

// watcher ======================================
gulp.task('watcher', function () {
  var watcher = gulp.watch(
    ['source/less/**/*.less', 'source/**/*.js', 'source/**/*.jsx'], 
    ['less','browserify']
  );
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  })
});

// default ======================================
gulp.task('default', ['less', 'browserify', 'watcher']);
