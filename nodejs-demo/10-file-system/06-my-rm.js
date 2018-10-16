#!/usr/bin/node

const fs = require('fs'),
      path = require('path');

var file = process.argv[2];

if(fs.statSync(file).isFile()) fs.unlinkSync(file);

if(fs.statSync(file).isDirectory()) deletedir(file);

function deletedir(file){
  var files = fs.readdirSync(file);
  for(var i = 0;i<files.length;i++){
    var floder = path.join(file,files[i]);
    if(fs.statSync(floder).isFile()){
      fs.unlinkSync(floder);
      continue;
    }
    if(fs.statSync(floder).isDirectory()) deletedir(floder);
  }
  fs.rmdirSync(file);
}
