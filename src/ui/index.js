import "./styles/main.scss";

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
function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    switch(url){
        case '/':
            const ProfileSection = Profile();
            $('.container').html(Section('about', '',true,ProfileSection));
            break;
        case 'category' : 
            const BlogSection = Blog();
            $('.container').html(Section('blog','From the blog',false,BlogSection));
            break;
        default: 
            break;

    }
    // route();
    console.log(url);
};


(function() {
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
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


    hideSitePreloader();

  })();
  



