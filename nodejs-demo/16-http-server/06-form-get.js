#!/usr/bin/node

var item = [];

const http = require('http'),
      url = require('url'),
      querystring = require('querystring');

http.createServer((req,res)=>{
  if(url.parse(req.url).pathname !== '/' ||  req.method !== 'GET'){
    res.statusCode = 404;
    res.end('Error!');
  }else{
    console.log(req.method,req.url,'http/'+ req.httpVersion);
    console.log(req.headers);
    console.log();
    var data = url.parse(req.url).query;
    //console.log(data);
    if(data !== null){
      data = querystring.parse(data);
      item.push(data.item);
    }
    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Todo List</title></head><body><h1>Todo List</h1><ul>' + item.map(function(item){
      return '<li>' + item +'</li>';
    }).join('\n') + '</ul><form method="GET" action="/"><input type="text" name="item"><input type="submit" value="Add Item"></form></body></html>';

    res.end(html);
  }
}).listen(8080);
