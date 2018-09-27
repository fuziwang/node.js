#!/usr/bin/node

require('./03-global.js');
console.log(global.pi);
console.log(global.circle(20).circumference());
console.log(global.circleobj.area(20));
