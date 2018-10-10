#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];

fs.appendFileSync(file);
