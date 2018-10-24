#!/usr/bin/node

const cp = require('child_process');

var cmd = cp.spawn('cat',['01-exec-file.js']); 
// 返回的是一个childprocess对象

cmd.stdout.pipe(process.stdout);
