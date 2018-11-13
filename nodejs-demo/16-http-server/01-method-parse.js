#!/usr/bin/node

const http = require('http');

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
      res.end('somethingwrong!');
  }
}).listen(8080);

function select(req,res){
  res.end('OK!');
}

function add(req,res){
  res.end('OK!');
}

function update(req,res){
  res.end('OK!');
}

function del(req,res){
  res.end('OK!');
}
