#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2] || __filename;

var fid = fs.openSync(file,'r');// 同步的打开文件返回一个表示文件描述符的整数

var len = fs.statSync(file).size;// 统计文件的字节数
var buf = new Buffer(len);
fs.readSync(fid,buf,0,len);
console.log(buf.toString('utf-8'));

fs.closeSync(fid);
