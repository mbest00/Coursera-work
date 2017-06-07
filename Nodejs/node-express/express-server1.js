var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(function(req, res, next){
    console.log(req.headers);

    //return this page for ANY request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Express Server Waking up....</h1></body></html>');
});

var server = http.createServer(app);
server.listen(port, hostname, function(){
    console.log('Express Server running at http://${hostname}:${port}/');
});