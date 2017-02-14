require(['jquery', 'top'], function ($, top) {

  'use strict';

  // Set JS flag class - possibly switch to Modernizr later

    $('html').addClass('js');

  // Initialise top link behaviours

    top.init();

});
