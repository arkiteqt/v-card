import $ from 'jquery';
import "./styles/fonts/icomoon/style.scss";
import "./styles/main.scss";

// Page Components & Modules
import Sidebar from './templates/partials/body/sidebar';
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/profile';
import Blog from './views/blog'
import Grid from './views/grid';

import fancybox from './functions/plugins/jquery.fancybox/jquery.fancybox';

function hideSitePreloader() {
    $('#preloader').remove();
    $('body').removeClass('loading');
}

(function() {
    // hideSitePreloader();
    // Your JavaScript code using vanilla JS goes here
    // Example:
    // var heading = document.createElement('h1');
    // heading.textContent = 'Hello, Vanilla JS!';
    // document.body.appendChild(heading);
    // Your jQuery code goes here
    // Example:
    const SidebarEl = Sidebar();
    $('.sidebar').append(SidebarEl);
    const WrapperEl = Wrapper();
    $('.wrapper').append(WrapperEl);
    const ProfileSection = Profile();
    $('.container').append(Section('about', '',true,ProfileSection));
    const BlogSection = Blog();
    $('.container').append(Section('blog','From the blog',false,BlogSection));
    const PortfolioSection = Grid();
    $('.container').append(Section('portfolio','Portfolio',false, PortfolioSection));

    hideSitePreloader();

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
  })();
  



