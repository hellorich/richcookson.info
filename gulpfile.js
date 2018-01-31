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

gulp.task('sass', function() { 
  return gulp.src(path.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer()) 
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(path.styles.dest));
});

gulp.task('default', ['sass']);
