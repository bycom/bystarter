'use strict';

module.exports = function(grunt) {

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      files: ['html/css/**/*.less', 'html/scripts/**/*.js', 'html/**/*.html', '!html/scripts/main.js'],
      tasks: ['default']
    },

    connect: {
      server: {
        options: {
          hostname: '',
          port: 9001,
          base: 'html',
          open: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['html/css/src']
        },
        files: {
          'html/css/main.css':        'html/css/src/main.less'
        }
      },
      dist: {
        options: {
          paths: ['html/css/src'] 
        },
        files: {
          'html/dist/css/main.css':      'html/css/src/main.less'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n',
        keepSpecialComments: 0
      },
      minify: {
        expand: true,
        cwd: 'html/css',
        src: ['*.css', '!*.min.css'],
        dest: 'html/dist/css/',
        ext: '.min.css'
      }
    },

    cmq: {
      options: {
        log: true
      },
      development: {
        files: {
          'html/css': ['html/css/*.css']
        }
      },
      dist: {
        files: {
          'html/dist/css': ['html/css/*.css']
        }
      }
    },

    jshint: {
      options: {
        node: true
      },
      beforeconcat: ['Gruntfile.js', 'html/scripts/src/*.js'],
      afterconcat: ['html/scripts/main.js']
    },

    concat: {
      development: {
        src: ['html/scripts/src/*.js'],
        dest: 'html/scripts/main.js'
      },
      dist: {
        src: ['html/scripts/src/*.js'],
        dest: 'html/dist/scripts/main.js'
      }
    },

    uglify: {
      options: {
        banner: '/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n'
      },
      dist: {
        files: {
          'html/dist/scripts/main.min.js': ['html/dist/scripts/main.js']
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          pngquant: true,
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'html/images',
            src: ['**/*.png', '**/*.jpg'],
            dest: 'html/dist/images'
          }
        ]
      }
    },

    copy: {
      main: {
        files: [
          { 
            expand: true, 
            cwd: 'html/',
            src: ['css/libs/**'], 
            dest: 'html/dist/'
          },
          { 
            expand: true, 
            cwd: 'html/',
            src: ['scripts/libs/**'], 
            dest: 'html/dist/'
          },
          { 
            expand: true, 
            cwd: 'html/',
            src: ['scripts/i18n/**'], 
            dest: 'html/dist/'
          },
          {
            expand: true, 
            flatten: true, 
            cwd: 'html/',
            src: ['scripts/plugins.js'], 
            dest: 'html/dist/scripts/', 
            filter: 'isFile'
          }
        ]
      }
    },

    clean: ['html/dist']

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('styles', ['less:development', 'cmq:development']);
  grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:development', 'jshint:afterconcat']);
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('default', ['styles', 'scripts']);
  grunt.registerTask('dist', ['clean', 'less:dist', 'cmq:dist', 'cssmin', 'jshint:beforeconcat', 'concat:dist', 'jshint:afterconcat', 'uglify:dist', 'imagemin', 'copy']);
  grunt.registerTask('server', ['connect', 'watch']);

};
