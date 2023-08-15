const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 3001; // TODO : replace with environment variable

const requestListener = (request, response) => {
  // get the relative url for the reuqest
  // for example, relative url for a request to https://google.com is /.
  const {url} = request;
  let filePath = `./assets/${url}`;	
  // if(url == '/'){
  //   filePath = '../../sites/rscard/public/homepage.html';
  // }	
  
  console.log(filePath);
  const fileExtension = String(path.extname(filePath)).toLowerCase();
  console.log(fileExtension);
  const mimeTypes = {
    '.html'	: 'text/html',
    '.js'	  : 'text/javascript',
    '.css'	  : 'text/css',
    '.json'	: 'application/json',
    '.png'	  : 'image/png',
    '.jpg'	  : 'image/jpg',
    '.gif'	  : 'image/gif',
    '.mp3'	  : 'audio/mp3',
    '.mp4'	  : 'video/mp4',
    '.woff'  : 'application/font-woff',
    '.ttf'	  : 'application/font-ttf',
    '.eot'	: 'application/vnd.ms-fontobject',
    '.otf'	: 'application/font-otf'
  }

  const contentType = mimeTypes[fileExtension];
  console.log(contentType)
  
  // find and serve file
  fs.readFile(filePath, (error, content) => {
    if(error){
      response.writeHead(500);
      response.end(`oops :, ${error.code}`)
    }else{
      response.writeHead(200,{'Content-Type' : contentType})
      response.end(content, 'utf-8');
    }
  })
} 

const server = http.createServer(requestListener)
server.listen(port, () => {
  console.log(`server running at port ${port}`) 
})
