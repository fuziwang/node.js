#!/usr/bin/node
var item = '';

const http = require('http'),
      querystring = require('querystring'),
      cp = require('child_process');

http.createServer((req,res)=>{
  console.log(req.method,req.url,'http/'+ req.httpVersion);
  console.log(req.headers);
  console.log();
  if(req.url === '/' && req.method === 'GET'){
    showpage(req,res);
  }else if(req.url === '/' && req.method === 'POST'){
    var data = '';
    
    req.on('data',(chunk)=>{data+=chunk;});
    req.on('end',()=>{
      item = '';
      data = querystring.parse(data);
      data = data.item.split(' ');
      console.log(data);
      var cmd = data[0],arg = [];
      console.log(cmd);
      for(var i = 1;i<data.length;i++){
        arg.push(data[i]);
      }
      cp.execFile(cmd,arg,(err,out,error)=>{
        if(err){
          console.error(err.message);
        }
        if(error){
          console.log(error);
        }
        console.log(out);
        item = out;
        showpage(req,res);
      });
    });
  }else{
    res.statusCode = 404;
    res.end('Error!');
  }
}).listen(8080);

function showpage(req,res){
  var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Linux Command</title></head><body><h1>Input a Linux command</h1><form method="POST" action="/"><input type="text" name="item"><input type="submit" value="execute"></form><div>' + item  +'</div></body></html>';
  res.end(html);
}
