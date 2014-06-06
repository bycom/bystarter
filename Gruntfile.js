'use strict';

module.exports = function(grunt) {

  var globalConfig = {
    port: 9001,
    root: 'html',
    src: {
      styles: '_stylesheets',
      scripts: '_scripts',
      images: '_images',
      html: '_patterns'
    },
    dest: {
      styles: 'css',
      scripts: 'scripts',
      images: 'images'
    }
  };

  grunt.initConfig({

    cfg: globalConfig,
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: '',
          port: '<%= cfg.port %>',
          base: '<%= cfg.root %>',
          open: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      files: [
        '<%= cfg.root %>/<%= cfg.src.styles %>/**/*.less', 
        '<%= cfg.root %>/<%= cfg.src.scripts %>/**/*.js', 
        '<%= cfg.root %>/<%= cfg.src.html %>/**/*.html', 
        '<%= cfg.root %>/index.html'
      ],
      tasks: ['default']
    },
    
    less: {
      development: {
        options: {
          paths: ['<%= cfg.root %>/<%= cfg.src.styles %>']
        },
        files: {
          '<%= cfg.root %>/<%= cfg.dest.styles %>/main.css': '<%= cfg.root %>/<%= cfg.src.styles %>/main.less'
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
        cwd: '<%= cfg.root %>/<%= cfg.dest.styles %>',
        src: ['*.css', '!*.min.css'],
        dest: '<%= cfg.root %>/<%= cfg.dest.styles %>/',
        ext: '.min.css'
      }
    },

    cmq: {
      options: {
        log: true
      },
      development: {
        files: {
          '<%= cfg.root %>/<%= cfg.dest.styles %>': ['<%= cfg.root %>/<%= cfg.dest.styles %>/*.css', '!*.min.css']
        }
      }
    },
    
    jshint: {
      options: {
        node: true,
        reporter: require('jshint-stylish')
      },
      beforeconcat: ['Gruntfile.js', '<%= cfg.root %>/<%= cfg.src.scripts %>/*.js'],
      afterconcat: ['<%= cfg.root %>/<%= cfg.dest.scripts %>/main.js']
    },

    concat: {
      development: {
        src: [
          '<%= cfg.root %>/<%= cfg.src.scripts %>/main.js',
          '<%= cfg.root %>/<%= cfg.src.scripts %>/*.js'
        ],
        dest: '<%= cfg.root %>/<%= cfg.dest.scripts %>/main.js'
      },
      plugins: {
        src: ['<%= cfg.root %>/<%= cfg.src.scripts %>/plugins/*.js'],
        dest: '<%= cfg.root %>/<%= cfg.dest.scripts %>/plugins.js'
      }
    },

    uglify: {
      options: {
        banner: '/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n'
      },
      development: {
        files: {
          '<%= cfg.root %>/<%= cfg.dest.scripts %>/plugins.js':  ['<%= cfg.root %>/<%= cfg.dest.scripts %>/plugins.js'],
          '<%= cfg.root %>/<%= cfg.dest.scripts %>/main.min.js': ['<%= cfg.root %>/<%= cfg.dest.scripts %>/main.js']
        }
      }
    },

    imagemin: {
      development: {
        options: {
          optimizationLevel: 7,
          pngquant: true,
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= cfg.root %>/<%= cfg.src.images %>',
            src: ['**/*.png', '**/*.jpg'],
            dest: '<%= cfg.root %>/<%= cfg.dest.images %>'
          }
        ]
      }
    },

    copy: {
      main: {
        files: [
          { 
            expand: true, 
            cwd: '<%= cfg.root %>/<%= cfg.src.scripts %>/libs/',
            src: ['*'], 
            dest: '<%= cfg.root %>/<%= cfg.dest.scripts %>/libs/',
            filter: 'isFile'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('styles', ['less:development', 'cmq:development']);
  grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:development', 'concat:plugins', 'jshint:afterconcat']);
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('default', ['styles', 'scripts', 'copy']);
  grunt.registerTask('dist', ['styles', 'cssmin', 'scripts', 'uglify:development', 'images']);
  grunt.registerTask('server', ['connect', 'watch']);

};
