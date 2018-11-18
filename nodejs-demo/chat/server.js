#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      ws = require('socket.io');

var server = http.createServer((req,res)=>{
  var data = fs.readFileSync('./client.html');
  res.end(data);
});


const io = ws(server); // 基于当前的web服务开启socket实例
//console.log(io);
// 检测连接事件
io.on('connection',function(socket){
  // 接受客户端所发送的信息
  //console.log('connect sucess'); 
  socket.on('message',(mes)=>{
    // 向所有客户端广播发送的消息
    
    //console.log(mes);
    io.emit('message',mes);
  });
});

server.listen(3000);
