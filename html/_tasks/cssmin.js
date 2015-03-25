'use strict';

module.exports = {
  options: {
    banner: "/*\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n",
    keepSpecialComments: 0
  },
  minify: {
    expand: true,
    cwd: "<%= cfg.root %><%= cfg.dest.styles %>",
    src: [
      "*.css",
      "!*.min.css"
    ],
    dest: "<%= cfg.root %><%= cfg.dest.styles %>",
    ext: ".min.css"
  }
};