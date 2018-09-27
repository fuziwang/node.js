#!/usr/bin/node
var Num = require('./04-share.js');
var n1 = new Num();
var n2 = new Num();

n1.add();
n1.add();
n1.getcount();
n2.getcount();
n2.add();
n1.getcount();
n2.getcount();
