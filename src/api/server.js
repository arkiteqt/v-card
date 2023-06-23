const fs = require('fs');
const express = require('express');
const app = express();


// fetch data to build and serve pages and components

// set port for hosting server
app.set('port', (process.env.PORT || 5000));
// server static assets from public dir
app.use(express.static(__dirname + '/src/ui/assets'));

// views is directory for all template files
app.set('views', __dirname + '/src/ui/templates');
app.set('view engine', 'ejs');

// serve home page
app.get('/', function(request, response) {
  response.render('pages/home', {
    settings : {
      theme : {
        color : 'a1f366',
        skin : 'dark'
      },
    },
    menu : [],
    items : [{
        title : "this is a test",
        subtitle: "a really awesome test",
        description : "can you see me"
    }]
  })
});

app.get('/blog/:category/', function(request, response) {
  response.render('templates/blog',  {})
});

app.get('/blog/:category/:title', function(request, response) {
  response.render('templates/single',  {})
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
