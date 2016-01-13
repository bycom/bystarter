'use strict';

module.exports = {
	compileWithMapsDir: {
		options: {
			bare: true,
			sourceMap: true,
			sourceMapDir: '<%= cfg.root %><%= cfg.src.scripts %>coffee_maps/' // source map files will be created here
		},
		expand: true,
		flatten: true,
		cwd: '<%= cfg.root %><%= cfg.src.scripts %>',
		src: ['*.coffee'],
		dest: '<%= cfg.root %><%= cfg.src.scripts %>temp/',
		ext: '.js'
	},
};