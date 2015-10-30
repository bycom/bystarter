'use strict';

// Gruntfile.js
module.exports = function (grunt) {

    //loads the various task configuration files
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // path to tasks and global variables
    var options = {
        // tasks pasth
        config : {
            src: "grunt/*.*"
        },
        pkg : grunt.file.readJSON('package.json'),
        // Global variables
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
    };

    var configs = require( 'load-grunt-configs' )( grunt, options);

    grunt.initConfig( configs );

    grunt.registerTask( 'default', ['styles', 'scripts', 'html', 'copy']);
    grunt.registerTask(  'server', ['browserSync', 'watch']);
    grunt.registerTask(  'styles', ['clean:css', 'sprites', 'less:compile', 'cmq:main', 'postcss:dist', 'less:sourceMap']);
    grunt.registerTask( 'scripts', ['jshint:beforeconcat', 'concat:main', 'concat:plugins', 'jshint:afterconcat']);
    grunt.registerTask(    'html', ['clean:pages', 'compile-handlebars:main', 'prettify']);
    grunt.registerTask(  'images', ['sprite', 'imagemin']);
    grunt.registerTask( 'sprites', ['sprite:icons']);
    grunt.registerTask(    'dist', ['default', 'cssmin', 'uglify:main', 'images']);
};