#!/usr/bin/node

const http = require('http');

var city = process.argv[2] || '石家庄';
var address = 'http://v.juhe.cn/weather/index?format=2&cityname='+ city + '&key=089c1db918016aa1643dcc167dc789fb';

http.get(global.encodeURI(address),(res)=>{
  var result = '';

  res.on('data',(data)=>{
    result += data.toString('utf-8');
  });

  res.on('end',()=>{
    console.log(JSON.parse(result));
  });
});
