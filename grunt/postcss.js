'use strict';

module.exports = {
	options: {
		diff: false, // or 'custom/path/to/file.css.patch'
		processors: [
			require('autoprefixer')({browsers: ['last 4 version']})
		]
	},
	dist: {
		src: '<%= cfg.root %><%= cfg.dest.styles %>*.css'
	}
};
