'use strict';

module.exports = {
  main: {
		files: [{
			expand: 	true,
			cwd: 		'<%= cfg.root %><%= cfg.src.html %>templates/',
			src: 		'*.hbs',
			dest: 		'<%= cfg.root %><%= cfg.dest.html %>',
			ext: 		'.html'
		}],
		
		preHTML: 		'<%= cfg.root %><%= cfg.src.utils %>globals/head.html',
		postHTML: 		'<%= cfg.root %><%= cfg.src.utils %>globals/foot.html',
		
		partials: 		'<%= cfg.root %><%= cfg.src.html %>**/*.hbs',

		templateData: 	'<%= cfg.root %><%= cfg.src.html %>**/*.json',
		helpers: 		'<%= cfg.root %><%= cfg.src.utils %>helpers/**/*.js'
	}
};