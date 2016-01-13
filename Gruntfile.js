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
	        dev_src : '_workflow/',
	        dist : 'dist/',
            src  : {
                styles  : '<%= cfg.dev_src %>_stylesheets/',
                scripts : '<%= cfg.dev_src %>_scripts/',
                images  : '<%= cfg.dev_src %>_images/',
                html    : '<%= cfg.dev_src %>_patterns/',
                utils   : '<%= cfg.dev_src %>_patterns/utilities/'
            },
            dest : {
                styles  : '<%= cfg.dist %>css/',
                scripts : '<%= cfg.dist %>scripts/',
                images  : '<%= cfg.dist %>images/',
                html    : '<%= cfg.dist %>pages/'
            }
        }
    };

    var configs = require( 'load-grunt-configs' )( grunt, options);

    grunt.initConfig( configs );

    grunt.registerTask(      'default', ['styles', 'coffeeScript'/*'scripts'*/, 'html', 'copy'/*, 'favicon'*/]);
    grunt.registerTask(       'server', ['browserSync', 'watch']);
    grunt.registerTask(       'styles', ['clean:css', 'sprites', 'less:compile', 'cmq:main', 'postcss:dist', 'less:sourceMap']);
    grunt.registerTask(      'scripts', ['jshint:beforeconcat', 'concat:main', 'concat:plugins', 'jshint:afterconcat']);
    grunt.registerTask( 'coffeeScript', ['coffee', 'concat', 'jshint:afterconcat_cff', 'clean:coffee_temp']);
    grunt.registerTask(         'html', ['clean:pages', 'compile-handlebars:main', 'prettify']);
    grunt.registerTask(       'images', ['sprite', 'imagemin']);
    grunt.registerTask(      'sprites', ['sprite:icons']);
    grunt.registerTask(         'dist', ['default', 'cssmin', 'uglify:main', 'images']);
    grunt.registerTask(      'favicon', ['clean:favicon', 'realFavicon']);
};
