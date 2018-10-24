#!/usr/bin/node

const cp = require('child_process');

cp.exec('cat a.txt | sort | uniq',(err,out)=>{
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(out);
});
