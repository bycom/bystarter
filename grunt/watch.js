'use strict';

module.exports = {
  less: {
    files: "<%= cfg.root %><%= cfg.src.styles %>**/*.less",
    tasks: [
      "styles",
      "watch"
    ]
  },
  scripts: {
    files: "<%= cfg.root %><%= cfg.src.scripts %>**/*.js",
    tasks: [
      "scripts",
      "watch"
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
      "html",
      "watch"
    ]
  }
}
