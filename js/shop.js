(function($) {
	/*-----------
		RANGE
	-----------*/
	$('.price-range-slider').jRange({
	    from: 1,
	    to: 99,
	    step: 1,
	    format: '%',
	    width: 242,
	    showLabels: true,
	    showScale: false,
	    isRange : true,
	    theme: "theme-edragon"
	});
})(jQuery);