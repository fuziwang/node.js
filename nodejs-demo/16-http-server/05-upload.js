#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  if(req.url !== '/' ||  req.method !== 'POST'){
    res.statusCode = 404;
    res.end('Error!');
  }else{
    console.log(req.method,req.url,'http/'+ req.httpVersion);
    console.log(req.headers);
    console.log();
    req.pipe(process.stdout);
    res.end('OK!');
  }
}).listen(8080);
