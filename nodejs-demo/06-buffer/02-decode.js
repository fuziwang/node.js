#!/usr/bin/node

const str = process.argv[2];

var buf = new Buffer(str,'base64');
var namepwd = buf.toString('utf-8');

var data = namepwd.split(':');

console.log('name:' + data[0] + ' pwd:' + data[1]);
