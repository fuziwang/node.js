#!/usr/bin/node

const cp = require('child_process');

var cmd = process.argv[2],
    arg = [];

for(var i = 3;i<process.argv.length;i++){
  arg.push(process.argv[i]);
}

cp.execFile(cmd,arg,(err,out,error)=>{
  if(err){
    console.error(err.message);
    process.exit(100);
  }
  if(error){
    console.log(error);
  }
  console.log(out);
});
