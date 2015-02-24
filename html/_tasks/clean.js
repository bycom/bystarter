'use strict';

module.exports = {
  pages: [
    "<%= cfg.root %><%= cfg.dest.html %>/*.html"
  ],
  css: [
    "<%= cfg.root %><%= cfg.dest.styles %>*.css"
  ]
};