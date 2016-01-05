function setupSliders(){
	$(".brightnessFilter").simpleSlider({range: [0,10], step: 0.1});
	$(".contrastFilter").simpleSlider({range: [0,10], step: 0.1});
	$(".grayscaleFilter").simpleSlider({range: [0,1], step: 0.1});
	$(".saturationFilter").simpleSlider({range: [0,10], step: 0.1});
	$(".hueFilter").simpleSlider({range: [0,360], step: 30});
	$(".sepiaFilter").simpleSlider({range: [0,1], step: 0.1});
}

function resetFilters() {
	$(".brightnessFilter").simpleSlider("setValue", 1);
	$(".contrastFilter").simpleSlider("setValue", 1);
	$(".grayscaleFilter").simpleSlider("setValue", 0);
	$(".saturationFilter").simpleSlider("setValue", 1);
	$(".hueFilter").simpleSlider("setValue", 0);
	$(".sepiaFilter").simpleSlider("setValue", 0);
}

window.onload = function() {
	setupSliders();
	resetFilters();

	$(".settingsBoxIcon").on("click", function(){
		$(".settingsBox, .settingsBoxIcon").toggleClass("open");
	});

	$(".filtersResetBtn").on("click", function(){
		resetFilters();
	});



};
