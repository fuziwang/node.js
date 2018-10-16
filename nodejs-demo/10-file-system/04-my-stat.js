#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];

console.log(fs.statSync(file));
