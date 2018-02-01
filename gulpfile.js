const gulp = require('gulp');
const sass = require('gulp-sass');
const handlebars = require('gulp-handlebars');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon'); // ?
const browserSync = require('browser-sync').create();
const bourbon = require('bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;

const path = {
  'html': {
    'dest': 'dist',
    'src': 'src/hbs/**/*.hbs'
  },
  'styles': {
    'dest': 'dist/assets/css',
    'src': 'src/sass/**/*.scss'
  },
  'scripts': {
    'dest': 'dist/assets/js',
    'src': 'src/js/*.js'
  }
};

// Task: SASS
gulp.task('sass', function() { 
  return gulp.src(path.styles.src)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [bourbon, neat]
    }))
    .pipe(autoprefixer()) 
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(path.styles.dest));
});

// Task: Handlebars
gulp.task('handlebars', function(){
  gulp.src(path.html.src)
    .pipe(handlebars())
    .pipe(gulp.dest(path.styles.html));
});

// Task: BrowserSync
gulp.task('go', ['sass'], function() {

    browserSync.init({
        server: path.html
    });

    gulp.watch(path.styles.src, ['sass']);
    gulp.watch(path.html.src).on('change', browserSync.reload);
});

// Task: Default
gulp.task('default', ['go']);
