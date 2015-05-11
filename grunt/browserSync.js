'use strict';

module.exports = {
  bsFiles: {
    src: [
      "<%= cfg.root %><%= cfg.dest.styles %>**/*.css",
      "<%= cfg.root %><%= cfg.dest.html %>**/*.html",
      "<%= cfg.root %><%= cfg.dest.scripts %>**/*.js",
      "<%= cfg.root %>index.html",
      "Gruntfile.js"
    ]
  },
  options: {
    watchTask: true,
    open: "ui",
    reloadDelay: 2000,
    timestamps: false,
    server: {
      baseDir: [
        "<%= cfg.root %>",
        "<%= cfg.root %><%= cfg.dest.html %>"
      ]
    }
  }
};
