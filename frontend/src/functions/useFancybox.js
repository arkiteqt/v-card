import fancybox from './plugins/jquery.fancybox/jquery.fancybox.pack';
import fancyBoxMedia from './plugins/jquery.fancybox/helpers/jquery.fancybox-media';

const useFancybox = () => {
    $('.portfolioFancybox').fancybox({
        padding: 0,
        wrapCSS: 'fancybox-portfolio',
        maxWidth: '795px',
        maxHeight: '85%',
        minWidth: '250px',
        mouseWheel: 'true',
        scrolling: "no",
        autoCenter: true,
        beforeShow: function () {
            // Get current popup
            var currentID = $(this.element).attr("href");
            var currentPopup = $('.fancybox-portfolio ' + currentID);

            // Append current popup embed
            var currentEmbed = currentPopup.find('.inline-embed');
            if (currentEmbed.length > 0) {
                var currentEmbedType = currentEmbed.data('embed-type');
                var curentEmbedUrl = currentEmbed.data('embed-url');

                switch (currentEmbedType) {
                    case "image":
                        currentEmbed.empty();
                        currentEmbed.addClass('inline-embed-image');
                        currentEmbed.append('<img src="' + curentEmbedUrl + '" />');
                        break;
                    case "iframe":
                        currentEmbed.empty();
                        currentEmbed.addClass('inline-embed-iframe');
                        currentEmbed.append('<iframe src="' + curentEmbedUrl + '" allowfullscreen></iframe>');
                        break;
                }
            }
        },
        afterShow: function () {
            // Get current popup
            var currentID = $(this.element).attr("href");
            var currentPopup = $('.fancybox-portfolio ' + currentID);

            // Make current popup visible with css
            currentPopup.addClass('opened');
        },
    });
}

export default useFancybox;