function ripple(element, pageX, pageY) {
	var $rippleElement = $('<span class="ripple-effect" />');
	var xPos = parseInt(pageX, 10) - parseInt(element.offset().left, 10);
	var yPos = parseInt(pageY, 10) - parseInt(element.offset().top, 10);
	var size = Math.floor(Math.min(element.height(), element.width()) * 0.5);
	var animateSize = Math.floor(Math.max(element.width(), element.height()) * Math.PI);

	$rippleElement
		.css({
			top: yPos,
			left: xPos,
			width: size,
			height: size
		})
		.appendTo(element)
		.animate({
			width: animateSize,
			height: animateSize,
			opacity: 0
		}, 500, function () {
			$(this).remove();
		});
}