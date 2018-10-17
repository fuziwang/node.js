#!/usr/bin/node

var count = 0;
function Num(){
  this.add = ()=>{count++;};
  this.getcount = ()=>{console.log(count);};

}

module.exports = Num;
