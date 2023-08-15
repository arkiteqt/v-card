function positioningInterestsTooltips() {
	var interests = $(".interests-list");
	var tooltips = interests.find('span');

	if(interests.length > 0) {
		for(var i = 0; i < tooltips.length; i++) {
			var tooltipW = $(tooltips[i]).outerWidth();
			var parentW = $(tooltips[i]).parent().outerWidth();				
			var left = (parentW - tooltipW) / 2 - 1;
			
			$(tooltips[i]).css('left', left + 'px');
		}
	}
}