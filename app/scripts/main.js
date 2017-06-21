jQuery(document).ready(function($) {
	$('.main-carousel').owlCarousel({
		items: 1,
		dotsContainer: '.owl-dots-main',
		autoplay: true,
		autoplayTimeout: 5000
	});

	$('.discounts-carousel').owlCarousel({
		items: 1,
		nav: true,
		navContainer: '.owl-nav-discount',
		navText: ['','']
		// autoplay: true,
		// autoplayTimeout: 5000
	});

	$('.partner-carousel').owlCarousel({
		
		
		navText: ['',''],
		margin: 40,
		navContainer: '.owl-nav-partner',

		responsive : {
			0: {
				items: 1,
				navs: false
			},
			768: {
				items: 3,
				navs: false
			},
			1000: {
				items: 5,
				navs: true
			}
		}
		
	});

	$('.search-toggle').on('click',  function(event) {
		event.preventDefault();
		$('.search-block').slideToggle('fast');
	});

	$('#close-search').on('click', function(event){
		event.preventDefault();
		$('.search-block').slideUp('fast');
	});
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}