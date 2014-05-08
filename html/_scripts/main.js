var BY_Starter = {
  debug: false,
  log: function(what)   { if(BY_Starter.debug) { console.log(what); } },
  exists: function(el)  { if($(el).length > 0) { return true; } },

  init: function() {
    // ...
  }

} || {};

;(function ($, window, undefined) {
  'use strict';

  $(document).ready(function() {
    BY_Starter.init();
  });

})(jQuery, this);