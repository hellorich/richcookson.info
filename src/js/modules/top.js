define('top', ['jquery'], function($) {

  'use strict';

  var _topLinkBegin = function( $element ) {

    var scroll = $(window).scrollTop(),
        headerHeight = $('.header').height();

    if ( scroll >= ( headerHeight + 100 ) ) {

      $element.show();
      $element.addClass('js-animate');

    } else {

      $element.removeClass('js-animate');

    }

  };

  var init = function () {

    // Fade in / out when page is at viewport height + 50

    var $topLink = $('.js-top');

    $(window).scroll( function() {

      _topLinkBegin ( $topLink );

    });

  };

  return {
    init: init
  };

});
