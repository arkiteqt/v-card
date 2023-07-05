function setContactSectionHeight() {
	var section = $('.section-contact .row');
	var section_box = section.find('.section-box');

	if (windowW > 767) {
		section_box.css('min-height', section.height() + 'px');
	} else {
		section_box.css('min-height', '0');
	}
}