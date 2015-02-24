'use strict';

module.exports = {
  options: {
    log: true
  },
  main: {
    files: {
        "<%= cfg.root %><%= cfg.dest.styles %>": [
        "<%= cfg.root %><%= cfg.dest.styles %>*.css",
        "!*.min.css"
      ]
    }
  }
};