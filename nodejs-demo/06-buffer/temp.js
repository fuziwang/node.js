const http = require('http'),
      fs = require('fs'),
      path = require('path');
var filename = process.argv[2];
if(process.argv.length !== 3) {
  console.error('命令行参数格式：cmd fileName');
  process.exit(-1);
}
try {
  var data = fs.readFileSync(filename).toString('base64');
} catch(e) {
  console.error(e.message);
  process.exit(-1);
}
var ext = path.extname(filename);
var datauri = 'data:img/' + ext.slice(1,ext.length) +  ';base64,' + data;
html = '<!DOCTYPE html><html><head><title>img</title></head><body><img src="' + datauri + '"/></body></html>';
http.createServer((req,res)=>{
  	res.end(html);
}).listen(8080);
