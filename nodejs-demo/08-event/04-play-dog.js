#!/usr/bin/node

var Dog = require('./04-dog.js');

var taidi = new Dog('taidi',5);
var zangao = new Dog('zangao',10);

taidi.on('bark',onbark.bind(taidi));
zangao.on('bark',onbark.bind(zangao));

function onbark(){
  console.log(this.name() + ' ' + this.energy());
}
