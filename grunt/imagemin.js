'use strict';

var imageCompressEngine = require('imagemin-jpeg-recompress');

module.exports = {
	main: {
		options: {
			optimizationLevel: 7,
			pngquant: true,
			progressive: true,
			use: [
				imageCompressEngine()
			]
		},
		files: [{
			expand: true,
			cwd: '<%= cfg.root %><%= cfg.src.images %>',
			src: ['**/*.{png,jpg,svg,gif}', '!icons/', '!favicon/'],
			dest: '<%= cfg.root %><%= cfg.dest.images %>'
		}]
	}
};