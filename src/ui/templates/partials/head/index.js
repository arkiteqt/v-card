const title = 'Virtual Card'
const metatags = require('./metatags');
const linktags = require('./links');
const scripts = require('./scripts');

// build meta tags
const metaTagsHTML = metatags.map((m, index) => {
    const attributes = m.attributes.map((a, i) => {
        return `${a.name}="${a.value}"`
    })
    return `<meta ${attributes.join(' ')} />`
});
// build title tag
const titleTagHTML = `<title>${title}</title>`
// build link tags
const linkTagsHTML = linktags.map((l, index) => {
    return `<link rel="${l.rel}" type="${l.type}" href="${l.href}" />`
});
// build script tags
const scriptTagsHTML = scripts.map((s, index) => {
    return `<script type="${s.type}" src="${s.src}"></script>`
});

const headHTML = () => {
    return `<head>
        ${metaTagsHTML.join('')}
        ${titleTagHTML}
        ${linkTagsHTML.join('')}
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        ${scriptTagsHTML.join('')}
    </head>`;
}

module.exports = headHTML;