#!/usr/bin/node

const Readable = require('stream').Readable;

var src = new Readable();

var c = 97;

src._read = function(){
  src.push(String.fromCharCode(c++));
  //String.fromcharCode(72,69,76,76,79); HELLO
  // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
  if(c > 'z'.charCodeAt(0)) src.push(null);
};

src.pipe(process.stdout);
