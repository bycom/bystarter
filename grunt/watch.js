'use strict';

module.exports = {
	less: {
		files: "<%= cfg.root %><%= cfg.src.styles %>**/*.less",
		tasks: [
			"styles"
		]
	},
	scripts: {
		files: "<%= cfg.root %><%= cfg.src.scripts %>**/*.js",
		tasks: [
			"scripts"
		]
	},
	coffee: {
		files: "<%= cfg.root %><%= cfg.src.scripts %>**/*.coffee",
		tasks: [
			"coffeeScript"
		]
	},
	images: {
		files: [
			"<%= cfg.root %><%= cfg.src.images %>**/**/*.*",
			"!<%= cfg.root %><%= cfg.src.images %>favicon/*.*",
		],
		tasks: [
			"images"
		]
	},
	html: {
		files: [
			"<%= cfg.root %><%= cfg.src.html %>**/*.hbs",
			"<%= cfg.root %><%= cfg.dest.html %>index.html",
			"<%= cfg.root %>index.html",
			"Gruntfile.js"
		],
		tasks: [
			"html"
		]
	}
}
