const headHTML = require('./templates/partials/head');
const bodyHTML = require('./templates/partials/body');

const theme = {
    code : 'a1f366',
    mode : 'light'
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
fs.writeFile(`../../dist/index.html`, page(), {encoding:'utf-8'}, function(error, result){
    if(error){
        // Error Creating File
        if(error.code == 'ENOENT'){
            // TODO : Create Dir

        }
        return console.log(error)
    }
    return console.log(result)
})