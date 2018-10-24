#!/usr/bin/node

const cp = require('child_process');

console.log(cp.execFileSync('cat',['01-exec-file.js']).toString('utf-8'));
