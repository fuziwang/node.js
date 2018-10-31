#!/usr/bin/node

const https = require('https'),
      url = require('url');

var name = process.argv[2] || 'wangding';
var address = 'https://api.github.com/search/repositories?q=user:' + name;

const options = url.parse(address);

options.method = 'GET';
options.headers = {
  'User-Agent': '02-get-repos.js',
};
https.get(options,function(res){
  var result = '';

  res.on('data',function(data){
    result +=data.toString('utf-8');
  });

  res.on('end',function(){
    var reps = JSON.parse(result);

    console.log('Total:',reps.total_count);
    console.log('========================');
    for(var i = 0;i<reps.total_count;i++){
      console.log('%d\t%s',i,reps.items[i].name);
    }
  });
});
