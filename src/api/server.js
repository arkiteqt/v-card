const fs = require('fs');
const express = require('express');
const app = express();
// set port for hosting server
app.set('port', (process.env.PORT || 5000));
// TODO: create endpoint to serve static assets
app.use(express.static(__dirname + '/src/ui/assets'));

// endpoints



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
