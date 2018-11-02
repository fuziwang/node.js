#### 解析 HTTP 方法

- 使用 http 模块创建 web 服务监听 8080 端口
- 解析 HTTP 请求的方法
- 使用 switch case 语句
- 至少解析 GET、POST、PUT 和 DELETE 四个 HTTP 方法
- 需要在 web 服务器程序中打印 HTTP 请求的方法名称
- 需要给客户端反馈信息
- 用 curl -X 参数测试各种 HTTP 请求方法

```javascript
#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log('HTTP Method:',req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      del(req,res);
      break;
    default:
      res.end('Something Wrong!');
  }
}).listen(8080);

function select(req,res){
  res.end('OK!');
}

function add(req,res){
  res.end('OK!');
}

function update(req,res){
  res.end('OK!');
}

function del(req,res){
  res.end('OK!');
}
```

程序运行结果：

```bash
# 前台运行结果
~/node.js/nodejs-demo/16-http(master*) » curl http://localhost:8080
OK!%                                                                             
------------------------------------------------------------
~/node.js/nodejs-demo/16-http(master*) » curl http://localhost:8080
OK!%                                                                             
------------------------------------------------------------
~/node.js/nodejs-demo/16-http(master*) » curl -X POST http://localhost:8080
OK!%                                                                             
------------------------------------------------------------
~/node.js/nodejs-demo/16-http(master*) » curl -X PUT http://localhost:8080
OK!%                                                                             
------------------------------------------------------------
~/node.js/nodejs-demo/16-http(master*) » curl -X DELETE http://localhost:8080 
OK!%

# 后天输出结果 得到的req.method
~/node.js/nodejs-demo/17-web(master*) » ./01-method-parse.js     wangding@OFFICE
HTTP Method: GET
HTTP Method: POST
HTTP Method: PUT
HTTP Method: DELETE
```

#### 解析 URL

URL和URI的区别：参考博客https://blog.csdn.net/simplebam/article/details/72644094

+ URI标记了一个网络资源，URI就是网络资源的头衔，通过URI标记可以把网络世界里面的每一个事物都加以标记并区分开来。

+ URL标记了一个WWW互联网资源（用地址标记），并给出了他的访问地址

  ![这里写图片描述](https://img-blog.csdn.net/20180830161912856?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbXBsZWJhbQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


+ URL是URI的子集，所有的URL都是URI，但不是每个URI都是URL，还有可能是URN

##### URL官方API

+ url.parse(urlString,boolean,boolean)

```txt
parse这个方法可以将一个url的字符串解析并返回一个url的对象
参数：urlString指传入一个url地址的字符串
第二个参数（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象
第三个参数（可省）传入一个布尔值，默认为false，为true时，会正确的解析不带协议的url地址
```

```javascript
> url.parse('http://imooc.com:8080/course/list?from=scoot&course=node#floor1')
Url {
  protocol: 'http:', // 底层指定的协议
  slashes: true, // 是否有协议的双斜线
  auth: null,
  host: 'imooc.com:8080', // 域名
  port: '8080', // 端口
  hostname: 'imooc.com',
  hash: '#floor1', // 哈希值 所对应的是锚点
  search: '?from=scoot&course=node', // 查询字符串参数
  query: 'from=scoot&course=node', // 发送的数据 参数串
  pathname: '/course/list', // 资源路径名
  path: '/course/list', // 资源路径
  href: 'http://imooc.com:8080/course/list?from=scoot&course=node#floor1' } 
> url.parse('http://imooc.com:8080/course/list?from=scoot&course=node#floor1',true)
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'imooc.com:8080',
  port: '8080',
  hostname: 'imooc.com',
  hash: '#floor1',
  search: '?from=scoot&course=node',
  query: { from: 'scoot', course: 'node' },// query被解析成了一个对象
  pathname: '/course/list',
  path: '/course/list?from=scoot&course=node',
  href:
   'http://imooc.com:8080/course/list?from=scoot&course=node#floor1' }
> url.parse('//imooc.com/course/list',true)
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: {},
  pathname: '//imooc.com/course/list',
  path: '//imooc.com/course/list',
  href: '//imooc.com/course/list' }
> url.parse('//imooc.com/course/list',true,true) 
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'imooc.com',
  port: null,
  hostname: 'imooc.com',
  hash: null,
  search: null,
  query: {},
  pathname: '/course/list',
  path: '/course/list',
  href: '//imooc.com/course/list' }
```

+ url.format(urlObj)

format这个方法是将传入的url对象编程一个url字符串并返回。参数：urlObj指一个url对象

```javascript
url.format({
  protocol: 'http:', // 底层指定的协议
  slashes: true, // 是否有协议的双斜线
  auth: null,
  host: 'imooc.com', // 域名
  port: '8080', // 端口
  hostname: 'imooc.com',
  hash: '#floor1', // 哈希值 所对应的是锚点
  search: '?from=scoot&course=node', // 查询字符串参数
  query: 'from=scoot&course=node', // 发送的数据 参数串
  pathname: '/course/list', // 资源路径名
  path: '/course/list', // 资源路径
  href: 'http://imooc.com:8080/course/list?from=scoot&course=node#floor1'
})
> http://imooc.com/course/list?from=scoot&course=node#floor1
```

+ url.resolve(from,to)

resolve这个方法返回一个格式为"from/to"的字符串，对传入的两个参数用"/"符号进行拼接，并返回

```javascript
> url.resolve('http://imooc.com/','course/list')
'http://imooc.com/course/list'
```

##### querystring 参数处理

`querystring`的意思是查询字符串，一般是对http请求所带的数据进行解析

+ `querystring.parse(str,separator,eq,options)`

parse这个方法是将一个字符串反序列化为一个对象。

```javascript
参数：
(1) str指需要反序列化的字符串;
(2) separator（可省）指用于分割str这个字符串的字符或字符串，默认值为"&";
(3) eq（可省）指用于划分键和值的字符或字符串，默认值为"=";
(4) options（可省）该参数是一个对象，里面可设置maxKeys和decodeURIComponent这两个属性：
maxKeys：传入一个number类型，指定解析键值对的最大值，默认值为1000，如果设置为0时，则取消解析的数量限制
decodeURIComponent:传入一个function，用于对含有%的字符串进行解码，默认值为querystring.unescape。
```

```javascript
> querystring.parse('name=scott&course=javascript&course=node&from=')
{ name: 'scott', course: [ 'javascript', 'node' ], from: '' }
> querystring.parse('name=scott&course=javascript&course=node&from=',',')// 解析出错
{ name: 'scott&course=javascript&course=node&from=' }
> querystring.parse('name=scott,course=javascript,course=node,from=',',')
{ name: 'scott', course: [ 'javascript', 'node' ], from: '' }
> querystring.parse('name:scott,course:javascript,course:node,from:',',',':')
{ name: 'scott', course: [ 'javascript', 'node' ], from: '' }
```

+ `querystring.stringify(obj,separator,eq,options)`

`stringify`这个方法是将一个对象序列化成一个字符串，与`querystring.parse`相对。

```txt
参数：
(1) obj指需要序列化的对象
(2) separator（可省）用于连接键值对的字符或字符串，默认值为"&";
(3) eq（可省）用于连接键和值的字符或字符串，默认值为"=";
(4) options（可省）传入一个对象，该对象可设置encodeURIComponent这个属性：encodeURIComponent:值的类型为function，可以将一个不安全的url字符串转换成百分比的形式，默认值为querystring.escape()。
```

```javascript
> querystring.stringify({name:'scott',course:['javascript','node'],from:''})
'name=scott&course=javascript&course=node&from='
> querystring.stringify({name:'scott',course:['javascript','node'],from:''},',')
'name=scott,course=javascript,course=node,from='
> querystring.stringify({name:'scott',course:['javascript','node'],from:''},',',':')
'name:scott,course:javascript,course:node,from:'
```

+ `querystring.escape(str)`

escape可使传入的字符串进行编码

+ `querystring.unescape(str)`

unescape方法可将含有%的字符串进行解码

```javascript
> querystring.escape('<哈哈>')
'%3C%E5%93%88%E5%93%88%3E'
> querystring.unescape('%3C%E5%93%88%E5%93%88%3E')
'<哈哈>'
```

##### 任务要求

![](images/54.png)

- 使用 http 模块、url 模块以及 querystring 模块
- 创建 web 服务监听 8080 端口
- 对 HTTP 请求的 URL 地址进行解析
- 在控制台打印解析的结果
- 对 URL 中的查询字符串进行解析，在控制台打印结果
- 解析给定的 url 地址：`http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f`，并在控制台打印解析的结果

```javascript
#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      querystring = require('querystring');

var address = 'http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f';

http.createServer((req,res)=>{
  console.log('HTTP req url',req.url);
  
  var path = url.parse(address);
  
  console.log('href:',path.href);
  console.log('protocol:',path.protocol);
  console.log('auth:',path.auth);
  console.log('hostname:',path.hostname);
  console.log('port:',path.port);
  console.log('host:',path.host);
  console.log('pathname:',path.pathname);
  console.log('search:',path.search);
  console.log('query:',path.query);
  console.log('slashes:',path.slashes);
  console.log('hash:',path.hash);
  
  console.log('URL parse:',path.pathname.split('/'));
  console.log('querystring parse:',querystring.parse(path.query));
  res.end('OK!');
}).listen(8080);
```

```bash
# 程序运行结果
HTTP req url /
href: http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f
protocol: http:
auth: wangding:123
hostname: www.baidu.com
port: 8080
host: www.baidu.com:8080
pathname: /a/b/c
search: ?age=20&gender=M
query: age=20&gender=M
slashes: true
hash: #/d/e/f
URL parse: [ '', 'a', 'b', 'c' ]
querystring parse: { age: '20', gender: 'M' }
```