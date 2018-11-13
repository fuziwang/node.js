#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      querystring = require('querystring');

var item = [];

http.createServer((req,res)=>{
  console.log('HTTP Method:',req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      del(req,res);
      break;
    default:
      res.end('SomethingWrong!');
  }
}).listen(8080);

function select(req,res){
  var msg = JSON.stringify(item);
  res.writeHead(200,{
    'Content-Type':'application/json',
    'Content-Length':Buffer.byteLength(msg)
  });
  res.end(msg);
}

function add(req,res){
  var data = '';

  req.on('data',(chunk)=>{data+=chunk;});
  req.on('end',()=>{
    data = querystring.parse(data);
    if(data.item !== '') item.push(data.item);
    res.end('OK!');
  });
}

function update(req,res){
  res.end(req.method);
}

function del(req,res){
  if(req.url === '/'){
    item = [];
    res.end('OK!');
  }else{
    var id = url.parse(req.url,true).query.id;
    
    if(id >= 0 && id< item.length){
      item.splice(id,1);
      res.end('OK!');
    } else{
      res.end('Error!');
    }
  }
}
