#!/usr/bin/node

// 初始化buffer对象，使用构造函数

var buf1 = new Buffer(256);
buf1[0] = 23;

const log = console.log;

log('buf1 length:',buf1.length);
log('buf1 content:',buf1);

// 赋值 得到新的buffer

for(var i = 0;i<256;i++) buf1[i] = i;

log('\nbuf1 new content:',buf1);

// buf1 可以有数组的一些方法

var buf2 = buf1.slice(250,256); // start end
log('\nbuf2 slice content:',buf2);

buf2.fill(0); // value
log('\nbuf2 new content:',buf2);


// buffer通过数组进行初始化

var arr = ['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = new Buffer(arr,'base64');
log('\nbuf3 content:',buf3);

// buffer通过字符串进行初始化

var buf4 = new Buffer('hello world','utf-8');
log('\nbuf4 content:',buf4);

buf3.copy(buf4);
log('\nbuf3 new content:',buf4);
