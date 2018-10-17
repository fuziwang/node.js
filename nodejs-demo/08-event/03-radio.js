#!/usr/bin/node

var EventEmitter = require('events').EventEmitter,
    util = require('util');

function Radio(station){
  EventEmitter.call(this);
  var that = this;
  global.setTimeout(()=>{
    that.emit('play',station);
  },0);
  global.setTimeout(()=>{
    that.emit('stop',station);
  },5000);
}

util.inherits(Radio,EventEmitter);

module.exports = Radio;
