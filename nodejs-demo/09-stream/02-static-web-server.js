#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs');
      
var file;

http.createServer((req,res)=>{
  //console.log(req.headers);
  //console.log(req.url);
  file = path.join(__dirname,req.url);
  /* 同步处理异常错误
  try{
    res.end(fs.readFileSync(file).toString('utf-8'));
  }catch(err){
    res.end(err.message);
  }
  */
  fs.createReadStream(file).pipe(res);// 由于流是异步的不能使用try catch
  //res.end("Hello World");
}).listen(8080);
