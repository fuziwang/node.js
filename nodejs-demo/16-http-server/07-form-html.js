#!/usr/bin/node

var item = [];

const http = require('http'),
      querystring = require('querystring'),
      fs = require('fs');

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
  var html = fs.readFileSync('./template.html').toString('utf-8');
  //console.log(item);
  html = html.replace('%',item.map(function(item){
    return '<li>' + item + '</li>';
  }).join('\n'));
  console.log(html);
  res.end(html);
}
