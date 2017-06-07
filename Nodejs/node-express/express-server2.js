var express = require('express');
var morgan = require('morgan');
//var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev')); // 'dev' = preformatted log outputs
app.use(express.static(__dirname + '/public')); //defining static files that can be served

app.listen(port, hostname, function(){
    console.log(`Express Server running at http://${hostname}:${port}/`);
    console.log('Express Server running at http://' + hostname + ':' + port + '/');
});
