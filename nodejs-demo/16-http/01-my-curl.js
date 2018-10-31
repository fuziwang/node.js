#!/usr/bin/node

const http = require('http'),
      url = require('url');

var address = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

const options = {
  hostname: url.parse(address).hostname,
  port: url.parse(address).port,
  path: url.parse(address).pathname,
  headers: {
    'user-agent':'01-my-curl',
  }
};
http.get(options,(res)=>{
  
  // 响应包括三部分 怎么拿到这三部分
  console.log('http/' + res.httpVersion,res.statusCode,res.statusMessage);
  console.log(res.headers);
  console.log();
  res.pipe(process.stdout);
});
