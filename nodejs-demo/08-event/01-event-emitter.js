#!/usr/bin/node

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello');
});

emitter.on('bye',()=>{
  console.log('bye');
  process.exit();
});

global.setInterval(()=>{emitter.emit('hello');},500);
global.setInterval(()=>{emitter.emit('bye');},3000);
