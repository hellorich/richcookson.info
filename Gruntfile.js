module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          base: 'dist',
          hostname: '0.0.0.0',
          port: 8000
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'src/sass/**/*.scss',
        tasks: ['sass'],
      },
      jade: {
        files: 'src/jade/**/*.jade',
        tasks: ['jade']
      },
      imagemin: {
        files: 'src/img/**/*.{gif,png,jpg}',
        tasks: ['imagemin']
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'compressed'
        },
        files: {
          'dist/_/styles/screen.css': 'src/sass/screen.scss'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [
          {
            dest: 'dist/',
            expand: true,
            ext: '.html',
            flatten: true,
            src: ['src/jade/**/*.jade', '!src/jade/includes/*.jade']
          }
        ]
      }
    },

    imagemin: {
      gif: {
        files: [
          {
            dest: 'dist/_/images/gif/',
            expand: true,
            ext: '.gif',
            src: ['src/img/gif/*.gif']
          }
        ]
      },
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            dest: 'dist/_/images/png/',
            expand: true,
            ext: '.png',
            src: ['src/img/png/*.png']
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            dest: 'dist/_/images/jpg/',
            expand: true,
            ext: '.jpg',
            flatten: true,
            src: ['src/img/jpg/*.jpg'],
          }
        ]
      }
    }

  });

  //grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);

};