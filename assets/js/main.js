/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);



/* Force HTTPS */
var host = "mcquade3.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";



/* Back to Top Button */
const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
	// Get the current scroll value
	let y = window.scrollY;
	 
	// If the scroll value is greater than the window height, add a class to the scroll-to-top button to show it
	if (y > 0) {scrollToTopButton.className = "top-link show";}
	else {scrollToTopButton.className = "top-link hide";}
};

window.addEventListener("scroll", scrollFunc);