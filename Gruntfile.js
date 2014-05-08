'use strict';

module.exports = function(grunt) {

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      files: ['html/_stylesheets/**/*.less', 'html/_scripts/**/*.js', 'html/_patterns/**/*.html', 'html/index.html'],
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
          paths: ['html/_stylesheets']
        },
        files: {
          'html/css/main.css':        'html/_stylesheets/main.less'
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
        dest: 'html/css/',
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
      }
    },
    
    jshint: {
      options: {
        node: true
      },
      beforeconcat: ['Gruntfile.js', 'html/_scripts/*.js'],
      afterconcat: ['html/scripts/main.js']
    },

    concat: {
      dist: {
        src: ['html/_scripts/*.js'],
        dest: 'html/scripts/main.js'
      }
    },

    uglify: {
      options: {
        banner: '/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n'
      },
      dist: {
        files: {
          'html/scripts/main.min.js': ['html/scripts/main.js']
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
            cwd: 'html/_images',
            src: ['**/*.png', '**/*.jpg'],
            dest: 'html/images'
          }
        ]
      }
    }

    // copy: {
    //   main: {
    //     files: [
    //       { 
    //         expand: true, 
    //         cwd: 'html/',
    //         src: ['css/libs/**'], 
    //         dest: 'html/dist/'
    //       },
    //       { 
    //         expand: true, 
    //         cwd: 'html/',
    //         src: ['scripts/libs/**'], 
    //         dest: 'html/dist/'
    //       },
    //       { 
    //         expand: true, 
    //         cwd: 'html/',
    //         src: ['scripts/i18n/**'], 
    //         dest: 'html/dist/'
    //       },
    //       {
    //         expand: true, 
    //         flatten: true, 
    //         cwd: 'html/',
    //         src: ['scripts/plugins.js'], 
    //         dest: 'html/dist/scripts/', 
    //         filter: 'isFile'
    //       }
    //     ]
    //   }
    // },

    // clean: ['html/dist']

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-combine-media-queries');
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
  grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:dist', 'jshint:afterconcat']);
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('default', ['styles', 'scripts']);
  grunt.registerTask('dist', [/*'clean', */'styles', 'cssmin', 'scripts', 'uglify:dist', 'imagemin'/*, 'copy'*/]);
  grunt.registerTask('server', ['connect', 'watch']);

};
