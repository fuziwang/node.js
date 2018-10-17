#!/usr/bin/node

const log = console.log;

/*向控制台打印 CPU 架构信息以及操作系统版本信息*/
log('arch: ',process.arch);
log('platform: ',process.platform);

/*打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息*/
log('id: ',process.pid);
log('execPath: ',process.execPath);

/*在脚本中让程序暂停执行*/
process.stdin.pause();

/*打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息*/

log('version: ',process.version);
log('uid: ',process.getuid());
log('gid: ',process.getgid());
log('pwd: ',process.cwd());

/*打印内存使用情况*/
log('rss: ',process.memoryUsage().rss);
log('heapTotal: ',process.memoryUsage().heapTotal);//栈的总量
log('heapUsed: ',process.memoryUsage().heapUsed);//栈的使用量
log('external: ',process.memoryUsage().external);//Chrome v8管理的c++内存

/*打印环境变量*/
log('env: ',process.env);






