#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2],
    uid = process.argv[3],
    gid = process.argv[3];

fs.chownSync(file,Number(uid),Number(gid));
