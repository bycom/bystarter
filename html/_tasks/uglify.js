'use strict';

module.exports = {
  options: {
    banner: "/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n"
  },
  main: {
    files: {
      "<%= cfg.root %><%= cfg.dest.scripts %>plugins.js": [
        "<%= cfg.root %><%= cfg.dest.scripts %>plugins.js"
      ],
      "<%= cfg.root %><%= cfg.dest.scripts %>main.min.js": [
        "<%= cfg.root %><%= cfg.dest.scripts %>main.js"
      ]
    }
  }
};