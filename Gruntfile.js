'use strict';

module.exports = function(grunt) {

  var globalConfig = {
    port: 9001,
    root: 'html/',
    src: {
      styles: '_stylesheets/',
      scripts: '_scripts/',
      images: '_images/',
      html: '_patterns/'
    },
    dest: {
      styles: 'css/',
      scripts: 'scripts/',
      images: 'images/',
      html: 'pages/'
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
        '<%= cfg.root %><%= cfg.src.styles %>**/*.less', 
        '<%= cfg.root %><%= cfg.src.scripts %>**/*.js', 
        '<%= cfg.root %><%= cfg.src.images %>**/*.*', 
        '<%= cfg.root %><%= cfg.src.html %>**/*.hbs', 
        '<%= cfg.root %>index.html',
        'Gruntfile.js'
      ],
      tasks: ['default']
    },
    
    less: {
      main: {
        options: {
          paths: ['<%= cfg.root %><%= cfg.src.styles %>']
        },
        files: {
          '<%= cfg.root %><%= cfg.dest.styles %>main.css': '<%= cfg.root %><%= cfg.src.styles %>main.less'
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
        cwd: '<%= cfg.root %><%= cfg.dest.styles %>',
        src: ['*.css', '!*.min.css'],
        dest: '<%= cfg.root %><%= cfg.dest.styles %>',
        ext: '.min.css'
      }
    },

    cmq: {
      options: {
        log: true
      },
      main: {
        files: {
          '<%= cfg.root %><%= cfg.dest.styles %>': ['<%= cfg.root %><%= cfg.dest.styles %>*.css', '!*.min.css']
        }
      }
    },
    
    jshint: {
      options: {
        node: true,
        reporter: require('jshint-stylish')
      },
      beforeconcat: ['Gruntfile.js', '<%= cfg.root %><%= cfg.src.scripts %>*.js'],
      afterconcat: ['<%= cfg.root %><%= cfg.dest.scripts %>main.js']
    },

    concat: {
      main: {
        src: [
          '<%= cfg.root %><%= cfg.src.scripts %>main.js',
          '<%= cfg.root %><%= cfg.src.scripts %>*.js'
        ],
        dest: '<%= cfg.root %><%= cfg.dest.scripts %>main.js'
      },
      plugins: {
        src: ['<%= cfg.root %><%= cfg.src.scripts %>plugins/*.js'],
        dest: '<%= cfg.root %><%= cfg.dest.scripts %>plugins.js'
      }
    },

    uglify: {
      options: {
        banner: '/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n'
      },
      main: {
        files: {
          '<%= cfg.root %><%= cfg.dest.scripts %>plugins.js':  ['<%= cfg.root %><%= cfg.dest.scripts %>plugins.js'],
          '<%= cfg.root %><%= cfg.dest.scripts %>main.min.js': ['<%= cfg.root %><%= cfg.dest.scripts %>main.js']
        }
      }
    },

    imagemin: {
      main: {
        options: {
          optimizationLevel: 7,
          pngquant: true,
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= cfg.root %><%= cfg.src.images %>',
            src: ['**/*.png', '**/*.jpg'],
            dest: '<%= cfg.root %><%= cfg.dest.images %>'
          }
        ]
      }
    },

    sprite: {
      icons: {
        src: '<%= cfg.root %><%= cfg.src.images %>icons/*.png',
        destImg: '<%= cfg.root %><%= cfg.dest.images %>icons.png',
        destCSS: '<%= cfg.root %><%= cfg.src.styles %>utilities/icons.less',
        algorithm: 'binary-tree',
        engine: 'phantomjs'
      }
    },

    copy: {
      main: {
        files: [
          { 
            expand: true, 
            cwd: '<%= cfg.root %><%= cfg.src.scripts %>libs/',
            src: ['*'], 
            dest: '<%= cfg.root %><%= cfg.dest.scripts %>libs/',
            filter: 'isFile'
          }
        ]
      }
    },

    'compile-handlebars': {
      main: {
        preHTML: '<%= cfg.root %><%= cfg.src.utils %>globals/head.html',
        postHTML: '<%= cfg.root %><%= cfg.src.utils %>globals/foot.html',
        template: '<%= cfg.root %><%= cfg.src.html %>templates/*.hbs',
        partials: '<%= cfg.root %><%= cfg.src.html %>**/*.hbs',
        templateData: '<%= cfg.root %><%= cfg.src.html %>**/.json',
        output: '<%= cfg.root %><%= cfg.dest.html %>*.html',
        helpers: '<%= cfg.root %><%= cfg.src.utils %>helpers/**/*.js'
      }
    },

    prettify: {
      options: {
        condense: false,
        padcomments: true,
        indent: 2,
        indent_char: ' ',
        brace_style: 'end-expand',
        preserve_newlines: true
      },
      files: {
        expand: true, 
        cwd: '<%= cfg.root %><%= cfg.dest.html %>',
        src: ['**/*.html'],
        dest: '<%= cfg.root %><%= cfg.dest.html %>'
      }
    },

    clean: {
      pages: ['<%= cfg.root %><%= cfg.dest.html %>']
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
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('styles', ['less:main', 'cmq:main']);
  grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:main', 'concat:plugins', 'jshint:afterconcat']);
  grunt.registerTask('sprites', ['sprite:icons']);
  grunt.registerTask('images', ['sprites', 'imagemin']);
  grunt.registerTask('html', ['clean:pages', 'compile-handlebars:main', 'prettify']);
  grunt.registerTask('default', ['styles', 'scripts', 'html', 'copy']);
  grunt.registerTask('dist', ['default', 'cssmin', 'uglify:main', 'images']);
  grunt.registerTask('server', ['connect', 'watch']);

};
