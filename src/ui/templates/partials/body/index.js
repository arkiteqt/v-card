const header = require('./header');
const sidebar = require('./sidebar');
const footer = require('./footer');
const scripts = require('./scripts');

const body = () => {
    return `<body class="home header-has-img loading">
    ${sidebar()}
    <div class="wrapper">
        ${header()}
        <div class="content">
            <div class="container">
               hello
            </div>
        </div>
        ${footer()}
    </div>
    <a class="btn-scroll-top" href="#"><i class="rsicon rsicon-arrow-up"></i></a>
    <div id="overlay"></div>
    <div id="preloader">
        <div class="preload-icon"><span></span><span></span></div>
        <div class="preload-text">Loading ...</div>
    </div>
    ${scripts}
</body>`}

module.exports = body;