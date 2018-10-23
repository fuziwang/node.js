#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Dog(name,energy){
  var _name = name;
  var _energy = energy;
  var that = this;
  this.name = ()=> _name;
  this.energy = () => _energy;

  EventEmitter.call(this);

  var timer = global.setInterval(()=>{
    if(_energy > 0){
      that.emit('bark');
      _energy--;
    } else{
      global.clearInterval(timer);
    }
  },500);
  

}

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
