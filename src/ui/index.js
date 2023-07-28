import $ from 'jquery';
import "./styles/main.scss";

// Page Components
import Sidebar from './templates/partials/body/sidebar';
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/profile';

// Modules
import BlogGrid from './views/blog-grid'


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
    const BlogGridEl = BlogGrid();
    $('.blog').append(BlogGridEl);
    const TestSection = Section('test', 'test', '<p>Test</p>')
    $('.wrapper').append(TestSection);
    const ProfileSection = Profile();
    $('.container').append(Section('about', '', ProfileSection));
    hideSitePreloader();
  })();
  



