'use strict';

module.exports = {
	options: {
		sourceMap: true,
		sourceMapStyle: "inline"
	},
	main: {
		src: [
			"<%= cfg.root %><%= cfg.dest.scripts %>main.js",
			"<%= cfg.root %><%= cfg.src.scripts %>temp/*.js"
		],
		dest: "<%= cfg.root %><%= cfg.dest.scripts %>main.js"
	},
	plugins: {
		src: [
			"<%= cfg.root %><%= cfg.src.scripts %>plugins/*.js"
		],
		dest: "<%= cfg.root %><%= cfg.dest.scripts %>plugins.js"
	}
};