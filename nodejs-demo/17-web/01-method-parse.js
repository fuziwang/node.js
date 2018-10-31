#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
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
      delete(req,res);
      break;
    default:
      res.end()
  }
});
