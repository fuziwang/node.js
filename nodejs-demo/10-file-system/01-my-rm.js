#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];

fs.unlinkSync(file);// rm
