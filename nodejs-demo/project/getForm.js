#!/usr/bin/node

const http = require('http'),
      url = require('url');

http.createServer((req,res)=>{
  var urlObj = url.parse(req.url,true);
  console.log(urlObj.pathname,urlObj.query);
  var str = '登录成功';
  var Buffer = new Buffer(str,'utf-8');
  res.end(Buffer);

}).listen(8080);
