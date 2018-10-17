#!/usr/bin/node

var code = process.argv[2];
if(typeof code === 'number'){
  console.log('命令行参数类型不符合！');
  process.exit(1);
}
if(process.argv.length <3){
  console.error('请给出命令行参数！');
  process.exit(1);
}
process.exit(code);

// process.exit(code:number) ?表示可以有也可以表示没有
// 获取退出码 echo $?
