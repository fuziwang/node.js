#### 全局：进程

##### 获取平台信息

- 向控制台打印 CPU 架构信息以及操作系统版本信息
- 打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息
- 在脚本中增加标准输入流的读取操作，让程序暂停执行
- 执行 Linux 命令 `ps aux`，验证当前进程的 ID 信息和程序中得到的进程 ID 信息相同
- 打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息
- 在命令行执行 'node -v' 命令，验证程序输出的 node.js 版本信息是否正确
- 在命令行执行 'id' 命令，验证程序输出的登录账户 id 信息是否正确
- 在命令行执行 'pwd' 命令，验证程序输出的当前工作目录信息是否正确
- 打印内存使用情况
- 打印环境变量
- 在命令行执行 'env' 命令，验证程序输出的环境变量信息正确

```javascript
#!/usr/bin/node

const log = console.log;

/*向控制台打印 CPU 架构信息以及操作系统版本信息*/
log("arch: ",process.arch);
log("platform: ",process.platform);

## 输出结果
arch:  x64
platform:  linux

/*打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息*/
log("id: ",process.pid);
log("execPath: ",process.execPath);

## 输出结果
id:  2569
execPath:  /usr/bin/node

/*在脚本中让程序暂停执行*/
process.stdin.pause();

/*打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息*/

log("version: ",process.version);
log("uid: ",process.getuid());
log("gid: ",process.getgid());
log("pwd: ",process.cwd());

## 输出结果
version:  v6.10.1
uid:  1000
gid:  1000
pwd:  /home/wangding/node.js/nodejs-demo/04-process

/*打印内存使用情况*/
log("rss: ",process.memoryUsage().rss);// 查看系统的常驻内存大小
log("heapTotal: ",process.memoryUsage().heapTotal);//查看 V8 动态分配的总内存大小
log("heapUsed: ",process.memoryUsage().heapUsed);//查看 v8 动态分配的已用内存大小
log("external: ",process.memoryUsage().external);//查看 v8 管理的绑定到 JS 对象上的 C++ 对象的内存

## 输出结果
rss:  14946304
heapTotal:  7376896
heapUsed:  3498472
external:  8380
/*打印环境变量*/
log("env: ",process.env);
```

##### 获取命令行参数

- 获取命令行参数，命令行参数为一个数学表达式
- 如果没有命令行参数，打印程序的使用说明
- 如果命令行参数是 --help 或者 -h，打印程序的使用说明
- 如果命令行参数多于 3 个，多余的参数忽略
- 对命令行参数的表达式进行求值，打印求值结果
- 命令行参数的格式如下：

```javascript
#!/usr/bin/node
// argv 是一个字符串数组 头两个字符串 第一个字符串是node 第二个参数是运行的脚本的绝对路径
/*
console.log(process.argv.length);

for(var i = 0;i<process.argv.length;i++){
  console.log(`${i}:argv - ${process.argv[i]}`);
}
*/

if(process.argv.length === 2 || process.argv[2] == "--help" || process.argv[2] == "-h"){
  console.log("usage: cmd-name [OPTION] [expression]\nevaluate the expression.\n\nMandatory arguments to long options are mandatory for short options too.\n-h, --help output help information and exit"
      )} else{
  console.log(process.argv[2] + "=" + eval(process.argv[2]));        
}

# 输出格式
./02-calc.js
usage: cmd-name [OPTION] [expression]
evaluate the expression.

Mandatory arguments to long options are mandatory for short options too.
-h, --help output help information and exit

./02-calc.js 2+4
2+4=6

./02-calc.js 2\*Math.PI
2*Math.PI=6.283185307179586
```

##### 处理退出码

退出码实质上是给程序看的，在Linux程序中，有时候子进程会输出退出码，父进程通过查看子进程输出的退出码来判断是否正确

在退出码中，0表示的是成功，1表示的是错误

- 通过命令行参数获取程序的退出码，以该退出码退出程序
- 通过 echo 命令查看程序的退出码
- 对命令行参数的退出码，做数据合法性校验

```javascript
#!/usr/bin/node

var code = process.argv[2];
if(typeof code === 'number'){
  console.log("命令行参数类型不符合！");
  process.exit(1);
}
if(process.argv.length <3){
  console.error("请给出命令行参数！");
  process.exit(1);
}
process.exit(code);

// process.exit(code:number) ?表示可以有也可以表示没有
// 获取退出码 echo $?
```

##### 操作标准输入输出流

- 逐条打印提示信息：姓名、邮箱、QQ、手机
- 读取用户键盘输入信息，保存到对象中
- 用户键盘输入结束后，打印完整的对象信息

```javascript
#!/usr/bin/node

const msg = ['name','email','qq','mobile'];

var i = 0,
  me = {};
console.log(msg[i] + ':');
process.stdin.on('data',(data)=>{
  me[msg[i]] = data.slice(0,data.length-1).toString('utf-8');// slice 是将回车进行去掉
  i++;
  if(i == msg.length){
    console.log(me);
    process.exit();
  }
  console.log(msg[i] + ':');
});
process.stdin.on('end',()=>{
  console.log(me);
});
```

##### 处理信号量

- 接收信号量，并对信号（SIGINT 和 SIGTSTP）进行处理
- 用控制台快捷键，给程序脚本发送信号量，测试程序的功能逻辑
- CTRL+C 发送 SIGINT 信号量，让程序退出
- CTRL+Z 发送 SIGTSTP 信号量，让程序挂起
- 用 kill 命令，给程序脚本发送信号量，测试程序的功能逻辑

```javascript
#!/usr/bin/node

process.stdin.resume();

process.on('SIGINT',()=>{
  console.log('you have pressed Ctrl+C');
  process.exit();
})

process.on('SIGTSTP',()=>{
  console.log('you have pressed Ctrl+Z');
})
// 杀掉程序的两种方式
/*
第一种： 通过 Ctrl+C 和 Ctrl+Z
第二种： 通过kill -2 pid 和 kill -20 pid
*/
```

##### 实现 my-kill 程序

- 获取命令行参数，得到进程 ID 信息和信号量标识符
- 向指定进程 ID 的进程发送特定的信号量
- 用 05-my-kill.js 脚本，向 05-signal.js 脚本发送信号量，测试两个程序的功能逻辑

```javascript
#!/usr/bin/node

const pid = process.argv[2];
const sig = process.argv[3];

process.kill(pid,sig);

## 程序运行结果
~/node.js-demo/04-process » ./05-my-kill.js SIGTSTP 3311        wangding@OFFICE
------------------------------------------------------------
~/node.js-demo/04-process » ./05-my-kill.js SIGTSTP 3311        wangding@OFFICE
------------------------------------------------------------
~/node.js-demo/04-process » ./05-my-kill.js SIGINT 3311

~/node.js-demo/04-process » ./05-signal.js                        wangding@OFFICE
3311
ctrl + z
ctrl + z
ctrl + c
```

