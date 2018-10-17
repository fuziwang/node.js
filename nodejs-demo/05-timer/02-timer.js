#!/usr/bin/node

console.log('start');

const time = global.setInterval(loop,500);

function loop(){
  console.log('I will loop forever');
}

global.setTimeout(function(){
  global.clearInterval(time);
  console.log('end');
},3000);
