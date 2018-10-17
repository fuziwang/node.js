#!/usr/bin/node

var Radio = require('./03-radio.js');

var radio = new Radio({freq:106.7,name:'music'});

radio.on('play',(station)=>{
  console.log(station.name + ' ' + station.freq);
});

radio.on('stop',(station)=>{
  console.log('%s has stoped',station.name);
});
