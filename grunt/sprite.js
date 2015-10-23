'use strict';

module.exports = {
  icons: {
    // src: "<%= cfg.root %><%= cfg.src.images %>icons/*.png",
    // dest: "<%= cfg.root %><%= cfg.dest.images %>icons.png",
    // destCSS: "<%= cfg.root %><%= cfg.src.styles %>utilities/icons.less",
    // algorithm: "binary-tree",
    // engine: "phantomjs"
    src: "<%= cfg.root %><%= cfg.src.images %>icons/*.png",
    dest: "<%= cfg.root %><%= cfg.dest.images %>icons.png",
    destCss: "<%= cfg.root %><%= cfg.src.styles %>utilities/icons.less"
  }
};