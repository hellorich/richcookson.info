const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const handlebars = require('gulp-compile-handlebars');
const uglify = require('gulp-uglify');
const pump = require('pump');
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
    'dest': 'dist/assets/img',
    'src': 'src/img/**/*.{gif,png,jpg,svg}'
  }
};

// Task: SASS
gulp.task('css', () => { 
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
gulp.task('html', () => {
  gulp.src('src/hbs/index.hbs')
    .pipe(handlebars({}, {
      batch : ['./src/hbs/partials']
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.html.dest));
});

// Task: Uglify
gulp.task('js', function(cb) {
  pump([
    gulp.src(path.scripts.src),
      uglify(),
      concat('scripts.js'),
      gulp.dest(path.scripts.dest)
    ],
    cb
  );
});

// Task: ImageMin
gulp.task('img', () =>
  gulp.src(path.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(path.images.dest))
);

// Task: BrowserSync
gulp.task('browsersync', ['css', 'html', 'js', 'img'], function() {
  browserSync.init({
      server: path.html.dest
  });

  gulp.watch(path.styles.src, ['css']);
  gulp.watch(path.html.src, ['html']);
  gulp.watch(path.scripts.src, ['js']);
  gulp.watch(path.images.src, ['img']);
  gulp.watch(path.html.src).on('change', browserSync.reload);
});

// Task: Express
gulp.task('express', ['css', 'html', 'js', 'img'], function() {
  const promise = new Promise(function(resolve, reject) {
    nodemon({
      script: 'app/app.js',
      ext: 'js,html',
      env: {
        'DEBUG': 'playbook:*'
      }
    }).on('restart', function() {
      return resolve();
    });
  });
  gulp.watch(path.styles.src, ['css']);
  gulp.watch(path.html.src, ['html']);
  gulp.watch(path.scripts.src, ['js']);
  gulp.watch(path.images.src, ['img']);
});

// Task: Default
gulp.task('default', ['express']);
