#!/usr/bin/node

const express = require('express');

const app = express();

const booksrouter = require('./routers/books.js');

app.get('/',(req,res)=>{
  res.end('Hello World');
});

app.use('/books',booksrouter);

app.listen(8080);
