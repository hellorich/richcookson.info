const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const handlebars = require('gulp-compile-handlebars');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
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
  },
  'images': {
    'dest': 'dist/assets/images',
    'src': 'src/img/**/*.{gif,png,jpg,svg}'
  }
};

// Task: SASS
gulp.task('sass', () => { 
  gulp.src(path.styles.src)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [bourbon, neat]
    }))
    .pipe(autoprefixer()) 
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(path.styles.dest));
});

// Task: Handlebars
gulp.task('handlebars', () => {
  gulp.src('src/hbs/index.hbs')
    .pipe(handlebars({}, {
      batch : ['./src/hbs/partials']
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.html.dest));
});

// Task: ImageMin
gulp.task('imagemin', () =>
  gulp.src(path.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(path.images.dest))
);
// Task: Uglify

// Task: BrowserSync
gulp.task('go', ['sass', 'handlebars'], function() {

    browserSync.init({
        server: path.html.dest
    });

    gulp.watch(path.styles.src, ['sass']);
    gulp.watch(path.html.src, ['handlebars']);
    gulp.watch(path.html.src).on('change', browserSync.reload);
});

// Task: Default
gulp.task('default', ['go']);
