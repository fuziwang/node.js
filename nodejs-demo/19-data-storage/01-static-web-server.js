#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

var buffer = {};

http.createServer((req,res)=>{
  console.log(buffer);
  sendFile(res,req.url);
}).listen(8080);

function sendFile(res,url){
  var file = __dirname + url;

  if(!buffer[file]){
    if(!fs.existsSync(file)){
      res.statusCode = 404;
      res.end('Not found file');
    }
    buffer[file] = fs.readFileSync(file);
  }

  res.end(buffer[file]);
  console.log();
  console.log(buffer);
  console.log();
}
