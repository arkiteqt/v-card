function filterBarLinePositioning(grid, button) {
	var filterValue = button.attr('data-filter');
	var buttonLeft = button.position().left;
	var buttonWidth = button.outerWidth();
	var filterLine = button.closest('.filter').find('.filter-bar-line');

	grid.isotope({filter: filterValue});
	filterLine.css({"left": buttonLeft + "px", "width": buttonWidth});
}