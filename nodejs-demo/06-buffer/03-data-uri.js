#!/usr/bin/node

var http = require('http'),
    fs = require('fs');

var filename = process.argv[2];
var data = fs.readFileSync(filename);

var datauri = 'data:image/png;base64,' + data.toString('base64');

var html = '<!DOCTYPE html><html><head><title>img</title></head><body><img src="' + datauri + '"/></body></html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);
