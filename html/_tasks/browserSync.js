'use strict';

module.exports = {
  bsFiles: {
    src: [
      "<%= cfg.root %><%= cfg.dest.styles %>**/*.css",
      "<%= cfg.root %><%= cfg.dest.html %>**/*.html",
      "<%= cfg.root %><%= cfg.src.scripts %>**/*.js",
      "<%= cfg.root %><%= cfg.src.html %>**/*.hbs",
      "<%= cfg.root %>index.html",
      "Gruntfile.js"
    ]
  },
  options: {
    watchTask: true,
    open: false,
    timestamps: false,
    server: {
      baseDir: [
        "<%= cfg.root %>",
        "<%= cfg.root %><%= cfg.dest.html %>"
      ]
    }
  }
};