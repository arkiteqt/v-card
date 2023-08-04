import "./styles/main.scss";

// Third Party Libs
import $ from 'jquery';
// import mousewheel from './functions/plugins/jquery.mousewheel-3.0.6.pack';
// import imagesloaded from './functions/libs/'



// Page Components & Modules
import Sidebar from './templates/partials/body/sidebar';
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/profile';
import Blog from './views/blog'
import Grid from './views/grid';

import useFancybox from "./functions/useFancybox";


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

    useFancybox();

    hideSitePreloader();

  })();
  



