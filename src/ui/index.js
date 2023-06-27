// import $ from 'jquery';
// import "./styles/main.scss";


// (function() {
//     // Your JavaScript code using vanilla JS goes here
//     // Example:
//     var heading = document.createElement('h1');
//     heading.textContent = 'Hello, Vanilla JS!';
//     document.body.appendChild(heading);
  
//     // Your jQuery code goes here
//     // Example:
//     $('body').append('<h2>Hello, jQuery!</h2>');
//   })();
  
const headHTML = require('./templates/partials/head');
const bodyHTML = require('./templates/partials/body');

const theme = {
    code : 'a1f366',
    mode : 'dark'
}

// return template string
const page = () => {
    return `<!DOCTYPE html>
    <html lang="en" class="theme-color-${theme.code} theme-skin-${theme.mode}">
        ${headHTML()}
        ${bodyHTML()}
    </html>`
}


const fs = require('fs');
const sass = require('sass');

const path = require('path');

// Specify input and output file paths
const inputFilePath = path.join(__dirname, 'styles','main.scss');
const outputFilePath = './dist/style.css'

// Compile SCSS to CSS
const result = sass.renderSync({
  file: inputFilePath,
  outputStyle: 'expanded' // You can change this to 'expanded' for readable CSS output
});

console.log(inputFilePath, outputFilePath);
// Write the compiled CSS to the output file
fs.writeFileSync(outputFilePath, result.css.toString());

console.log(`Compiled ${inputFilePath} to ${outputFilePath}`);
console.log('SCSS compilation completed!');

fs.writeFile(`./dist/index.html`, page(), {encoding:'utf-8'}, function(error, result){
    if(error){
        // Error Creating File
        if(error.code == 'ENOENT'){
            // TODO : Create Dir or file

        }
        return console.log(error)
    }
    return console.log(result)
})