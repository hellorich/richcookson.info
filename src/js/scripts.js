(function () {
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

  var _scrollTop = function ( $element ) {

    $element.on('click', function() {

      $('html, body').animate({ scrollTop: 0 });

      return false;

    });

  };

  var init = function () {

    $('html').addClass('js');

    // Fade in / out when page is at viewport height + 50

    var $topLink = $('.js-top');

    _scrollTop( $topLink );

    $(window).scroll( function() {

      _topLinkBegin ( $topLink );

    });

  };

  init();

})();
