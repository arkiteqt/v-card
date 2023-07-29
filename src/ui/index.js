import $ from 'jquery';
import "./styles/fonts/icomoon/style.scss";
import "./styles/main.scss";

// Page Components & Modules
import Sidebar from './templates/partials/body/sidebar';
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/profile';
import Blog from './views/blog'


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
    const TestSection = Section('test', 'test',true, '<p>Test</p>')
    $('.container').append(TestSection);
    hideSitePreloader();
  })();
  



