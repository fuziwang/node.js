#!/usr/bin/node

console.log('file name:',__filename);
console.log('dir name:',__dirname);

/*在文件操作的时候，可以进行目录的拼接，可以用一个文件的绝对路径和相对路径从而得到一个文件的绝对路径*/

/*method1*/
var file = __dirname + '/view/base.html';

/*method2*/
var file;
switch(process.platform){
  case 'Linux':
    file = __dirname + '/view/base.html';
    break;
  case 'win32':
    file = __dirname + '\\view\\base.html';
    break;
  default:

    file = 'error';
}

/*method3*/
const path = require('path');
file = path.join(__dirname,'view','base.html');
