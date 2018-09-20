#!/usr/bin/node

const pid = process.argv[2];
const sig = process.argv[3];

process.kill(pid,sig);
