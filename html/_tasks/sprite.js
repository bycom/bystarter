'use strict';

module.exports = {
  icons: {
    src: "<%= cfg.root %><%= cfg.src.images %>icons/*.png",
    destImg: "<%= cfg.root %><%= cfg.dest.images %>icons.png",
    destCSS: "<%= cfg.root %><%= cfg.src.styles %>utilities/icons.less",
    lgorithm: "binary-tree",
    engine: "phantomjs"
  }
};