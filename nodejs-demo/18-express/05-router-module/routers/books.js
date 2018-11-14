#!/usr/bin/node

const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
  console.log(Date.now());
  next();
});

router.get('/',(req,res)=>{
  res.send('books');
});

router.get('/list',(req,res)=>{
  res.end('books-list');
});

module.exports = router;
