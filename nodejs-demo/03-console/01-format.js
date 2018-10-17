#!/usr/bin/node

const user = {
  name:'frewen',
  age:21,
  qq:'2622860598'
};

const log = console.log;

//method1

log('name: %s',user.name);
log('age: %d',user.age);
log('user: %j',user);

//method2

log('qq: ' + user.qq);

//method3

log(`qq: ${user.qq}`);

console.error('Error:something Error');
