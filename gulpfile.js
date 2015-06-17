var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
  return sass('./src/css/main.scss', { style: 'expanded' })
    .pipe(gulp.dest('src/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('src/css'));
});

gulp.task('js', function(){
  return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('src/js'));
});

gulp.task('sass:watch', function (){
  gulp.watch('./src/css/main.scss', ['sass']);
});

gulp.task('js:watch', function(){
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'js:watch'], function() {});
