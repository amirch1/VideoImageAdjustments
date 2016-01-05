window.onload = function() {
	var settingsBoxOpened = false;
	$(".settingsBoxIcon").on("click", function(){
		settingsBoxOpened = !settingsBoxOpened;
		if (settingsBoxOpened){
			$(".settingsBox, .settingsBoxIcon").addClass("open");
		}else{
			$(".settingsBox, .settingsBoxIcon").removeClass("open");
		}
	});
};
