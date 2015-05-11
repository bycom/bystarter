'use strict';

module.exports = {
  options: {
    node: true,
    reporter:  require('jshint-stylish') 
  },
  beforeconcat: [
    "Gruntfile.js",
    "<%= cfg.root %><%= cfg.src.scripts %>*.js"
  ],
  afterconcat: [
    "<%= cfg.root %><%= cfg.dest.scripts %>main.js"
  ]
};