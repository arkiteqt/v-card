function positioningTimelineElements() {
	if ($(window).width() > 600) { // For large devices
		$('.timeline').each(function () {				
			var tlineBar = $(this).find('.timeline-bar');
			var tlineBarH = 0;
			var tlineWrap = $(this).find('.timeline-inner');
			var tlineWrapH = 0;
			var tlineGutter = rsOptions.timeline.itemsSpace;
										
			var col1Top = 0;
			var col1TopPrev = 0;
			var col1LastElemH = 0;
			var col1Elems = $(this).find('.timeline-box-left');
			
			var col2Top = rsOptions.timeline.topSpace;;
			var col2TopPrev = 0;
			var col2LastElemH = 0;		                				
			var col2Elems = $(this).find('.timeline-box-right');
			
			// Switch top params for RTL
			if(rsOptions.rtl){
				col1Top = col2Top;
				col2Top = 0;
			}
			
			// Positioning first column elements
			for (var i = 0; i < col1Elems.length; i++) {
				$(col1Elems[i]).css({'position': 'absolute', 'left': '0', 'top': col1Top + 'px'});
				col1TopPrev = col1Top;
				col1Top = col1Top + $(col1Elems[i]).height() + tlineGutter;
				col1LastElemH = $(col1Elems[i]).height();													
			}

			// Positioning second column elements               
			for (var i = 0; i < col2Elems.length; i++) {
				$(col2Elems[i]).css({'position': 'absolute', 'right': '0', 'top': col2Top + 'px'});
				col2TopPrev = col2Top;
				col2Top = col2Top + $(col2Elems[i]).height() + tlineGutter;
				col2LastElemH = $(col2Elems[i]).height();
			}							
			
			// Set container & bar height's								
			if (col1Top > col2Top) {
				tlineWrapH = col1Top - tlineGutter;                    
			} else {
				tlineWrapH = col2Top - tlineGutter;                    
			}
			
			if (col1TopPrev > col2TopPrev) {
				tlineBarH = col1TopPrev;
			} else {
				tlineBarH = col2TopPrev;
			}
			
			tlineWrap.height(tlineWrapH);
			tlineBar.css({'top': '80px', 'height': tlineBarH + 'px'});
		});
	} else { // For small devices
		$('.timeline-bar').attr('style', '');
		$('.timeline-box').attr('style', '');
		$('.timeline-inner').attr('style', '');
	}
}	 