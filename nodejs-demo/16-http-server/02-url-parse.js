#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      querystring = require('querystring');

var address = 'http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f';


http.createServer((req,res)=>{
  console.log('HTTP req url',req.url);
  
  var path = url.parse(address);
        
  console.log('href:',path.href);
  console.log('protocol:',path.protocol);
  console.log('auth:',path.auth);
  console.log('hostname:',path.hostname);
  console.log('port:',path.port);
  console.log('host:',path.host);
  console.log('pathname:',path.pathname);
  console.log('search:',path.search);
  console.log('query:',path.query);
  console.log('slashes:',path.slashes);
  console.log('hash:',path.hash);
                              
  console.log('URL parse:',path.pathname.split('/'));
  console.log('querystring parse:',querystring.parse(path.query));
  res.end('OK!');

}).listen(8080);
