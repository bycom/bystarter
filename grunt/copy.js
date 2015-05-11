'use strict';

module.exports = {
  main: {
    files: [
      {
        expand: true,
        cwd: "<%= cfg.root %><%= cfg.src.scripts %>libs/",
        src: [
          "*"
        ],
        dest: "<%= cfg.root %><%= cfg.dest.scripts %>libs/",
        filter: "isFile"
      }
    ]
  }
};