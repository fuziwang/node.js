#!/usr/bin/node
/*
var PI = require('./02-export-var');

console.log('\n'+ PI);
console.log();
console.dir(module);
*/
/*
var circle = require('./02-export-function');

const log = console.log;

log(circle(20).diameter());
log(circle(20).circumference());
log(circle(20).area());
*/

var circle = require('./02-export-object');

const log = console.log;

log(circle.diameter(20));
log(circle.circumference(20));
log(circle.area(20));
