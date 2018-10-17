#!/usr/bin/node


function Dog(name,energy){
  var _name = name;
  var _energy = energy;
  var listener = {};

  this.name = ()=> _name;
  this.energy = ()=> _energy;

  var timer = global.setInterval(()=>{
    if(_energy>0){
      emit('bark');
      _energy--;
    }else{
      global.clearInterval(timer);
    }
  },500);
  function emit(evt){
    listener[evt].forEach((fn)=>{fn.call(this);});
  }
  this.on = (evt,fn) =>{
    if(typeof(listener[evt]) === 'undefined'){
      listener[evt] = [];
    }
    listener[evt].push(fn);
  };
}

module.exports = Dog;
