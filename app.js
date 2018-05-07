var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser());

//define routes
app.use(require('./todos'));

app.listen(3000, () => {
  console.log('listening port 3000: localhost:3000');
});


/*var http = require('http');
http.createServer((req, resp) => {
  resp.writeHead('200', {'Content-Type': 'text/plain'});
  resp.end('Hello World\n');
}).listen(3000, () => {
  console.log('listening port 3000: localhost:3000');
});*/
