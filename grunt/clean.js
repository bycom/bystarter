'use strict';

module.exports = {
	pages: [
		"<%= cfg.root %><%= cfg.dest.html %>/*.html"
	],
	css: [
		"<%= cfg.root %><%= cfg.dest.styles %>*.css"
	],
	favicon: [
		"<%= cfg.root %><%= cfg.dest.images %>favicon/*.*"
	],
	images: [
		"<%= cfg.root %><%= cfg.dest.images %>*.*"
	],
	coffee_temp : [
		"<%= cfg.root %><%= cfg.src.scripts %>temp/"
	]
};