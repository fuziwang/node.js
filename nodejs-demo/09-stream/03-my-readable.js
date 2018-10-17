#!/usr/bin/node

const Readable = require('stream').Readable,
      util = require('util');

var c = 97;

var MyReadable = function(){
  Readable.call(this);
};

MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) this.push(null);
};

util.inherits(MyReadable,Readable);

var src = new MyReadable();
src.pipe(process.stdout);
