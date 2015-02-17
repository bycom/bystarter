'use strict';

// Gruntfile.js
module.exports = function (grunt) {

    //loads the various task configuration files
    var timer       = require('time-grunt')(grunt);
    var tasks       = require('load-grunt-tasks')(grunt);
    var configs     = require('load-grunt-configs')(grunt);
    var ice         = require('imagemin-jpeg-recompress');

    configs = require( 'load-grunt-configs' )( grunt, {
        //pkg: grunt.file.readJSON('package.json'),
        cfg : {
            root : 'html/',
            src  : {
                styles  : '_stylesheets/',
                scripts : '_scripts/',
                images  : '_images/',
                html    : '_patterns/',
                utils   : '_patterns/utilities/'
            },
            dest : {
                styles  : 'css/',
                scripts : 'scripts/',
                images  : 'images/',
                html    : 'pages/'
            }
        }
    });

  grunt.initConfig( configs );

    grunt.registerTask('default', ['styles', 'scripts', 'html', 'copy']);
    grunt.registerTask('server', ['browserSync', 'watch']);
    grunt.registerTask('styles', ['clean:css', 'less:compile', 'cmq:main', 'less:sourceMap']);
    grunt.registerTask('scripts', ['jshint:beforeconcat', 'concat:main', 'concat:plugins', 'jshint:afterconcat']);
    grunt.registerTask('html', ['clean:pages', 'compile-handlebars:main', 'prettify']);
    grunt.registerTask('images', ['sprite', 'imagemin']);
    grunt.registerTask('sprites', ['sprite:icons']);
    grunt.registerTask('notifyme', ['notify:GoogleAnalytics', 'attention']);
    grunt.registerTask('dist', ['default', 'cssmin', 'uglify:main', 'images', 'notifyme']);
};