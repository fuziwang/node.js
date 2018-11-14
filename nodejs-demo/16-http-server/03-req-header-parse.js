#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(req.headers);
  console.log('host:',req.headers.host);
  console.log('user-agent:',req.headers['user-agent']);
  res.end('OK');
}).listen(8080);
