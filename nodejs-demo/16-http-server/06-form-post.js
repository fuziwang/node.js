#!/usr/bin/node

var item = [];

const http = require('http'),
      querystring = require('querystring');

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

      data = querystring.parse(data);
      console.log(data.item);
      if(data.item !== '') item.push(data.item);
      showpage(req,res);
    });
  }else{
    res.statusCode = 404;
    res.end('Error!');
  }

}).listen(8080);

function showpage(req,res){
  
  var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Todo List</title></head><body><h1>Todo List</h1><ul>' + item.map(function(item){
    return '<li>' + item +'</li>';          
  }).join('\n') + '</ul><form method="POST" action="/"><input type="text" name="item"><input type="submit" value="Add Item"></form></body></html>';
  res.end(html);
}
