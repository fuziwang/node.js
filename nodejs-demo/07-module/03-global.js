#!/usr/bin/node

global.pi = Math.PI;

global.circle = (radius)=>{
  return {
    circumference:function(){return 2*Math.PI*radius;},
    area:function(){return Math.PI*radius*radius;}
  };
};

global.circleobj = {
  circumference:function(radius){return 2*Math.PI.radius;},
  area:function(radius){return Math.PI*radius*radius;}
};
