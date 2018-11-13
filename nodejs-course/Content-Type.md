#### HTTP中Content-Type的类型说明

在Http协议消息头中，使用Content-Type来表示具体请求中的媒体类型信息。

**常见的媒体格式类型如下：**

- text/html ： HTML格式
- text/plain ：纯文本格式      
- text/xml ：  XML格式
- image/gif ：gif图片格式    
- image/jpeg ：jpg图片格式 
- image/png：png图片格式

**以application开头的媒体格式类型：**

- application/xhtml+xml ：XHTML格式

- application/xml     ： XML数据格式
- application/atom+xml  ：Atom XML聚合格式    
- application/json    ： JSON数据格式
- application/pdf       ：pdf格式  
- application/msword  ： Word文档格式
- application/octet-stream ： 二进制流数据（如常见的文件下载）
- `application/x-www-form-urlencoded` ： `<form encType=””>`中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）

**另外一种常见的媒体格式是上传文件之时使用的：**

+ multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

#### 四种常见的 POST 提交数据方式对应的content-type取值

##### application/x-www-form-urlencoded

这应该是最常见的 POST 提交数据的方式了。浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 `application/x-www-form-urlencoded` 方式提交数据。

```http
POST http://www.example.com HTTP/1.1 
Content-Type: application/x-www-form-urlencoded;charset=utf-8

title=test&sub%5B%5D=1&sub%5B%5D=2&sub%5B%5D=3
```

+ `Content-Type` 被指定为 `application/x-www-form-urlencoded;` 
+ 提交的数据按照 `key1=val1&key2=val2` 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。

很多时候，我们用 Ajax 提交数据时，也是使用这种方式。例如 JQuery 和 QWrap 的 Ajax，Content-Type 默认值都是`「application/x-www-form-urlencoded;charset=utf-8」`。 

##### multipart/form-data

这又是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 `form` 的 `enctyped` 等于这个值。

```http
POST http://www.example.com HTTP/1.1 

Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA 

------WebKitFormBoundaryrGKCBY7qhFd3TrwA 
Content-Disposition: form-data; name="text" 

title 
------WebKitFormBoundaryrGKCBY7qhFd3TrwA 
Content-Disposition: form-data; name="file"; filename="chrome.png" 
Content-Type: image/png 

PNG ... content of chrome.png ... 
------WebKitFormBoundaryrGKCBY7qhFd3TrwA-- 
```

+ 生成了一个 boundary 用于分割不同的字段，为了避免与正文内容重复，boundary 很长很复杂
+ `Content-Type` 里指明了数据是以 `mutipart/form-data` 来编码，本次请求的 boundary 是什么内容。
+ 消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。**如果传输的是文件，还要包含文件名和文件类型信息。**
+ 消息主体最后以 --boundary-- 标示结束。

这种方式一般用来上传文件，各大服务端语言对它也有着良好的支持。 上面提到的这两种 POST 数据的方式，都是浏览器原生支持的，而且现阶段原生 form 表单也只支持这两种方式。但是随着越来越多的 Web 站点，尤其是 WebApp，全部使用 Ajax 进行数据交互之后，我们完全可以定义新的数据提交方式，给开发带来更多便利。 

##### application/json 

`application/json` 这个 Content-Type 作为响应头大家肯定不陌生。实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 `JSON.stringify`，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。 

Google 的 `AngularJS` 中的 Ajax 功能，默认就是提交 JSON 字符串。例如下面这段代码： 

```javascript
var data = {'title':'test', 'sub' : [1,2,3]}; 
$http.post(url, data).success(function(result) { 
    ... 
});
```

最终发送的请求是： 

```http
POST http://www.example.com HTTP/1.1 
Content-Type: application/json;charset=utf-8 

{"title":"test","sub":[1,2,3]} 
```

这种方案，可以方便的提交复杂的结构化数据，特别适合 RESTful 的接口。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。

