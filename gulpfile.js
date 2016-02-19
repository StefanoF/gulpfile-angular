var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var flatten = require('gulp-flatten');

gulp.task('js', function () {
  gulp.src(['src/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
});

gulp.task('css', function () {
  gulp.src(['src/**/*.css'])
    .pipe(concat('app.css'))
    .pipe(uglifycss({
      "max-line-len": 80
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy:img', function () {
  return gulp
    .src('src/img/**')
    .pipe(gulp.dest('./build/img'))
});

gulp.task('copy:directives', function(){
  return gulp
    .src('src/js/directives/**/*.html')
    .pipe(gulp.dest('./build/js/directives'))
});

gulp.task('copy:lib', function(){
  return gulp
    .src('src/lib/**/*.js')
    .pipe(gulp.dest('./build/lib/'))
});

gulp.task('copy:fonts', function(){
  return gulp
    .src('src/lib/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('./build/fonts'))
});

gulp.task('copy:views', function(){
  return gulp
    .src('src/views/**')
    .pipe(gulp.dest('./build/views'))
});

gulp.task('copy:rootfiles', function(){
  return gulp
    .src(['src/*', '!src/index.html'])
    .pipe(gulp.dest('./build'))
});

gulp.task('default', [
  'js', 
  'css', 
  'copy:img', 
  'copy:directives', 
  'copy:lib',
  'copy:fonts',
  'copy:views',
  'copy:rootfiles'
], function() {});
