#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');

var address = 'http://edu.51cto.com/courselist/index-zh5-p1.html';

for(var i = 1;i<87;i++){
  address = 'http://edu.51cto.com/courselist/index-zh5-p' + i + '.html';
  http.get(address,(res)=>{

    var html = '';
    res.on('data',(data)=>{
      html +=data;
    });
  
    res.on('end',()=>{
      var $ = cheerio.load(html);
      $('body').find('div.main').each(function(){
        var cName = $(this).find('a').text(),
            cTime = $(this).find('p.fl').text(),
            cTarget = $(this).find('div.course_target').text(),
            cUrl = $(this).find('a').attr('href');
        if(cTime === '') return;
        console.log('课程名称：',cName.trim());
        console.log('课程时长：',cTime.trim());
        console.log('课程目标：',cTarget.trim());
        console.log('课程地址:',cUrl.trim());
        console.log();
      });
    });
  });
}
/*
http.get(address,(res)=>{
  /*console.log('http/' + res.httpVersion,res.statusCode,res.statusMessage);
  console.log(res.headers);
  console.log();*/
/*
  var html = '';
  res.on('data',(data)=>{
    html +=data;
  });
  
  res.on('end',()=>{
    var $ = cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName = $(this).find('a').text(),
          cTime = $(this).find('p.fl').text(),
          cTarget = $(this).find('div.course_target').text(),
          cUrl = $(this).find('a').attr('href');
      if(cTime === '') return;
      console.log('课程名称：',cName.trim());
      console.log('课程时长：',cTime.trim());
      console.log('课程目标：',cTarget.trim());
      console.log('课程地址:',cUrl.trim());
      console.log();
    });
  });
});
*/
