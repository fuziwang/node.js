#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      querystring = require('querystring');
//var addr = 'http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#a/b/c';


http.createServer((req,res)=>{
  console.log('url:',req.url);
  
  console.log('pathname:',url.parse(req.url).pathname);

  console.log('querystring:',url.parse(req.url).query);
  
  console.log('qs parse:',querystring.parse(url.parse(req.url).query));
  res.end('OK!');
}).listen(8080);
