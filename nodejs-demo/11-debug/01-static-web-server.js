#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs'),
      util = require('util'),
      log = util.debuglog('app');
      
var file;

http.createServer((req,res)=>{
  log(req.headers);
  log();
  log(req.url);
  file = path.join(__dirname,req.url);
  log();
  log(file);

  var read = fs.createReadStream(file);// 由于流是异步的不能使用try catch
  read.on('error',(err)=>{
    res.end(err.message);
    return;
  });
  read.pipe(res);
}).listen(8080);
