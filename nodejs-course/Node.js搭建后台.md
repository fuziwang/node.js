# Node.js案例

### GET处理form表单数据

```html
<!--登录页面-->
<!DOCTYPE html>
<html>
<head>
	<title>登录</title>
	<meta charset="utf-8"/>
</head>
<body>
  	<form action="http://192.168.80.144" method="GET">
		用户名：<input type="text" name="user"><br/>
		密码：<input type="password" name="pass">
	</form>
</body>
</html>
```

后台处理程序：

+ 需要拿到相应的数据
+ 需要给前台返回一个相应的内容

```javascript
#!/usr/bin/node

const http = require('http'),
      url = require('url');

http.createServer((req,res)=>{
  	var urlObj = url.parse(req.url,true);
  	console.log(url.pathname,url.query);
  	res.end('登录成功');
}).listen(8080);
```

