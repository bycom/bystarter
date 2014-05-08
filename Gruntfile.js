'use strict';

module.exports = function(grunt) {

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Reload assets live in the browser
    // https://github.com/gruntjs/grunt-contrib-livereload
    livereload: {
      port: 35729
    },

    // Start a connect web server
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
        options: {
          hostname: '',
          port: 9001,
          base: 'html'
        }
      }
    },

    // Run predefined tasks whenever watched file patterns are added, changed or deleted
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
        livereload: true
      },
      files: ['html/_stylesheets/**/*.less', 'html/_scripts/**/*.js', 'html/_patterns/**/*.html', 'html/index.html'],
      tasks: ['default']
    },

    // Compile LESS files to CSS
    // https://github.com/gruntjs/grunt-contrib-less
    less: {
      development: {
        options: {
          paths: ['html/_stylesheets'] // Specifies directories to scan for @import directives when parsing
        },
        files: {
          'html/css/main.css':        'html/_stylesheets/main.less'
        }
      }
    },

    // Compress CSS files
    // https://github.com/gruntjs/grunt-contrib-cssmin
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

    // Combine media queries
    // https://github.com/buildingblocks/grunt-combine-media-queries
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

    // Validate files with JSHint
    // https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      options: {
        node: true  // This option defines globals available when your code is running inside of the Node runtime environment
      },
      beforeconcat: ['Gruntfile.js', 'html/_scripts/*.js'],
      afterconcat: ['html/scripts/main.js']
    },

    // Concatenate files
    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      dist: {
        src: ['html/_scripts/*.js'],
        dest: 'html/scripts/main.js'
      }
    },

    // Minify files with UglifyJS
    // https://github.com/gruntjs/grunt-contrib-uglify
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

    // Minify PNG and JPEG images
    // https://github.com/gruntjs/grunt-contrib-imagemin
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
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

    // Copy files and folders
    // https://github.com/gruntjs/grunt-contrib-copy
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

    // Clean files and folders
    // https://github.com/gruntjs/grunt-contrib-clean
    // clean: ['html/dist']

  });

  // Load the plugins that provide the tasks we specified in package.json
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // File tasks
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-clean');

  // Styles tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-combine-media-queries');
    
  // Scripts tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Images tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Styles
  grunt.registerTask('styles', ['less:development', 'cmq:development']);

  // Scripts
  grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:dist', 'jshint:afterconcat']);

  // Images
  grunt.registerTask('images', ['imagemin']);

  // Development build (default)
  grunt.registerTask('default', ['styles', 'scripts']);

  // Production build
  grunt.registerTask('dist', [/*'clean', */'styles', 'cssmin', 'scripts', 'uglify:dist', 'imagemin'/*, 'copy'*/]);

  // Server
  grunt.registerTask('server', ['connect', 'watch']);
};
