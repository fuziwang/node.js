#!/usr/bin/node

const http = require('http'),
      url = require('url');

var address = process.argv[2] || 'http://localhost:8080';

var options = {
  hostname:url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,
  method:'POST',
  headers:{
    'User-Agent':'03-server',
  }
};
const req = http.request(options,(res)=>{
  console.log('HTTP/' + res.httpVersion,res.statusCode,res.statusMessage);

  console.log(res.headers);
  console.log();
  res.pipe(process.stdout);
});

req.write('{""name":"wangding""}');
req.end();
