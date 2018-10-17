#!/usr/bin/node

const Writable = require('stream').Writable,
      util = require('util');

function GreenStram(){
  Writable.call(this);
}

GreenStram.prototype._write = function(chunk,encode,cb){
  process.stdout.write('\033[1;32m' + chunk.slice(0,chunk.length-1) + '\033[1;37m');
  cb;
};

util.inherits(GreenStram,Writable);

var dst = new GreenStram();
process.stdin.pipe(dst);
