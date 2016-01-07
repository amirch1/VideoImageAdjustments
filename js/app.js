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

function bindSliders() {
	$(".brightnessFilter").bind("slider:changed", function(event, data) {
		addFilter('brightness', data.value);
	});
	$(".contrastFilter").bind("slider:changed", function(event, data) {
		addFilter('contrast', data.value);
	});
	$(".grayscaleFilter").bind("slider:changed", function(event, data) {
		addFilter('grayscale', data.value);
	});
	$(".saturationFilter").bind("slider:changed", function(event, data) {
		addFilter('saturate', data.value);
	});
	$(".hueFilter").bind("slider:changed", function(event, data) {
		addFilter('hue-rotate', data.value + 'deg');
	});
	$(".sepiaFilter").bind("slider:changed", function(event, data) {
		addFilter('sepia', data.value);
	});
}

function addFilter(filterName, value) {
	var userAgent = navigator.userAgent;
	var filterString = "webkitFilter";
	if (userAgent.indexOf('Firefox') != -1){
		filterString = "filter";
	}
	var oldStyle = $("#vid").css(filterString);
	var filterVal = filterName + '(' + value + ')';

	if(oldStyle === "none") {
		$('#vid').css(filterString,filterVal);
	}
	else {
		var currentStyle = $("#vid").css(filterString).split(" ").filter(function (name) {
			return name.indexOf(filterName) == -1;
		});
		currentStyle.push(filterName + '(' + value + ')');
		$("#vid").css(filterString, currentStyle.join(" "));
	}
}

window.onload = function() {
	setupSliders();
	resetFilters();
	bindSliders();

	$(".settingsBoxIcon").on("click", function(){
		$(".settingsBox, .settingsBoxIcon").toggleClass("open");
	});

	$(".filtersResetBtn").on("click", function(){
		resetFilters();
	});
};
