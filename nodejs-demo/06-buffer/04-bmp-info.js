#!/usr/bin/node

const fileName = process.argv[2],
      fs = require('fs'),
      log = console.log;

var buf = fs.readFileSync(fileName);

log('BMP width:',buf.readUInt32LE(18));
log('BMP height:',buf.readUInt32LE(22));
log('color depth:',buf.readUInt16LE(28));
