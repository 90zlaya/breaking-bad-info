/*
  Template: Juno - Multipurpose Landing Page Pack
  Author: InovatikThemes
  Created: Mar 2019
  Updated: May 2020 by 90zlaya
  Description: Custom JS file
*/

(function($) {

  "use strict";

	// Preloader
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	// Collapse navbar on scroll
  $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
  });

  // Page scrolling feature - requires jQuery Easing plugin
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    var hrefOfAnchor = $anchor.attr('href');
    var offsetFromTop = $(hrefOfAnchor).offset().top;
    // No offset for first section of the page
    if (hrefOfAnchor === 'body' || hrefOfAnchor === '#header') {
      offsetFromTop = 0;
    }
    $('html, body').stop().animate({
      scrollTop: offsetFromTop
    }, 600, 'easeInOutExpo');
    event.preventDefault();
  });

  // When document is ready
	$(function() {

    // Closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
      if (!$(this).parent().hasClass('dropdown')) {
        $(".navbar-collapse").collapse('hide');
      }
    });

    // Rotating Text - Morphtext
  	$("#js-rotating").Morphext({
  		// The [in] animation type. Refer to Animate.css for a list of available animations.
  		animation: "fadeIn",
  		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
  		separator: ",",
  		// The delay between the changing of each phrase in milliseconds.
  		speed: 2000,
  		complete: function () {
  			// Called after the entrance animation is executed.
  		}
    });

    // Video - Magnific Popup
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1&hd=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });

    // Card slider
    if ($(".card-slider > .swiper-wrapper > div").length > 0) {
      // Run card slider only when there are slides
      cardSlider();
    }

    // Counter - CountTo
  	var a = 0;
  	$(window).scroll(function() {
      /*
        Checking if CountTo section exists in the page,
        if not it will not run the script and avoid errors
      */
  		if ($('#counter').length) {
  			var oTop = $('#counter').offset().top - window.innerHeight;
  			if (a == 0 && $(window).scrollTop() > oTop) {
    			$('.counter-value').each(function() {
    				var $this = $(this),
    				countTo = $this.attr('data-count');
    				$({
    				  countNum: $this.text()
    				}).animate({
      					countNum: countTo
      				},
      				{
      					duration: 2000,
      					easing: 'swing',
      					step: function() {
      					  $this.text(Math.floor(this.countNum));
      					},
      					complete: function() {
      					  $this.text(this.countNum);
      					}
      				}
            );
    			});
    			a = 1;
  			}
  		}
    });

    // Create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
      if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('500');
      } else {
        $('a.back-to-top').fadeOut('500');
      }
    });

  	// Removes Long Focus On Buttons
  	$(".button, a, button").mouseup(function() {
  		$(this).blur();
  	});

	});

})(jQuery);

// Card Slider - Swiper
function cardSlider() {
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // When window is <= 992px
      992: {
        slidesPerView: 2
      },
      // When window is <= 768px
      768: {
        slidesPerView: 1
      }
    }
  });
}
