#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  if(req.url === '/'){
    var html = '<!DOCTYPE html><html><head><title>hello</title><meta charset="utf-8"/></head><body><h1>Hello World!</h1></body></html>';
    //res.statusCode = 200;
    //res.setHeader('Content-type','text/html');

    res.writeHead(200,{
      'Content-Type':'text/plain',
      'Content-Lenght':Buffer.byteLength(html)
    });

    res.end(html);
  } else {
    res.statusCode = 404;
    res.end('Resource Not Found!');
  }
}).listen(8080);
