#!/usr/bin/node

/*console.log('first');

global.setTimeout(function(){
  console.log('second');
},2000);
//说明JavaScript的异步执行
console.log('third');*/

function Bomb(){
  this.message = 'Bomb';
}

Bomb.prototype.explode = function(){
  console.log(this.message);
};

var b = new Bomb();

// 此时直接执行时，this指向的是timeout对象
var time = global.setTimeout(b.explode.bind(b),2000);

//global.clearTimeout(time);

