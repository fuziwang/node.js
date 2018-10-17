#!/usr/bin/node

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());

});

/*
 * global.setTimeout(()=>{
 *   stdin.removeAllListeners();
 *   },3000)
 */

process.stdin.on('end',()=>{
  process.exit();

});
