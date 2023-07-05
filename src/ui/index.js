import $ from 'jquery';
import "./styles/main.scss";

// Page Components
import Sidebar from './templates/partials/body/sidebar';
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';

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
    const TestSection = Section('test', 'test')
    $('body').append(TestSection);
    const SidebarEl = Sidebar();
    $('.sidebar').append(SidebarEl);
    const WrapperEl = Wrapper();
    $('.wrapper').append(WrapperEl);
    hideSitePreloader();
  })();
  



