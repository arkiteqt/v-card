import $ from 'jquery';
import "./styles/main.scss";

import Section from './templates/partials/section';

(function() {
    // Your JavaScript code using vanilla JS goes here
    // Example:
    // var heading = document.createElement('h1');
    // heading.textContent = 'Hello, Vanilla JS!';
    // document.body.appendChild(heading);
    // Your jQuery code goes here
    // Example:
    const TestSection = Section('test', 'test')
    $('body').append(TestSection);
  })();
  


