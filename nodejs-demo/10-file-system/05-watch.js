#!/usr/bin/node

const fs = require('fs');

fs.watch(__dirname,function(e,f){
  console.log(e,f);
});
