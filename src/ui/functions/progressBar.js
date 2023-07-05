
function setProgressBarsFill() {
	var $progress_bar = $('.progress-bar');

	if (!isMobile) {
		$progress_bar.appear();
		$progress_bar.on('appear', function (event, $affected) {
			setProgressBarsWidth($affected)
		});
		$.force_appear();
	} else {
		setProgressBarsWidth($progress_bar)
	}
}

function setProgressBarsWidth(bars) {
	for (var i = 0; i < bars.length; i++) {
		var $bar_fill = $(bars[i]).find('.bar-fill');

		$bar_fill.width($bar_fill.data('width'));
	}
}
