/* mobile menu activation */
var $hamburger = $('.hamburger');
			var $mainnav = $('.main-navigation');
			$hamburger.on('click', function(e) {
				$hamburger.toggleClass('is-active');
				$mainnav.toggleClass('main-navigation--mobile');
				$mainnav.toggleClass('slideInRight');
});