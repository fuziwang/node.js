#!/usr/bin/node

process.stdin.resume();

process.on('SIGINT',()=>{
  console.log('you have pressed Ctrl+C');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you have pressed Ctrl+D');
});
