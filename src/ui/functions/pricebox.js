function setPriceBoxesHeight() {
	var priceRow = $('.price-list');

	if (windowW > 767) {
		priceRow.each(function () {
			var priceRowHeight = 0;
			var priceBox = $(this).find('.price-box');

			priceBox.css('height', 'auto');
			priceRowHeight = $(this).height();
			priceBox.height(priceRowHeight);
		});
	} else {
		$('.price-box').css('height', 'auto');
	}
}
   