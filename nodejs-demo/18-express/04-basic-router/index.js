#!/usr/bin/node

const express = require('express');

const app = express();

app.get('/json',(req,res)=>{
  res.json({name:'frewen',age:'12'});
  //res.end();
});

app.get('/download',(req,res)=>{
  res.download('./package.json');
});

function c1(req,res,next){
  console.log('c1');
  next();
}

function c2(req,res,next){
  console.log('c2');
  next();
}

app.get('/',[c1,c2],(req,res,next)=>{
  console.log('c3');
  next();
},(req,res)=>{
  console.log('c4');
  res.send('OK!');
});

app.listen(8080);
