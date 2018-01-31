const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

const path = {
  'styles' : {
    'dest' : 'dist/css',
    'src' : 'src/sass/**/*.scss'
  },
  'scripts' : {
    'dest' : 'public/js',
    'src' : 'src/js/*.js'
  }
};

gulp.task('default');
