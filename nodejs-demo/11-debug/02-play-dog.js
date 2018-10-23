#!/usr/bin/node

var Dog = require('./02-dog.js');

var taidi = new Dog('taidi',5);
var zangao = new Dog('zangao',10);

taidi.on('bark',onbark);
zangao.on('bark',onbark);

function onbark(){
  console.log(this.name() + ' ' + this.energy());
}
