#### 全局：定时器

##### 实现延迟执行任务

- 定义一个定时炸弹对象
- 定时炸弹对象和 setTimeout 函数绑定
- 定时炸弹爆炸
- 在定时炸弹爆炸之前，拆除定时炸弹

```javascript
 #!/usr/bin/node

/*console.log('first');

global.setTimeout(function(){
  console.log('second');
},2000);

//说明JavaScript的异步执行

console.log('third');*/

function Bomb(){
  this.message = 'Bomb';
}

Bomb.prototype.explode = function(){
  console.log(this.message);
}

var b = new Bomb();

// 此时直接执行时，this指向的是timeout对象
var time = global.setTimeout(b.explode.bind(b),2000);

//global.clearTimeout(time);
```

##### 实现定时执行任务

- 定时执行任务
- 用两种方式取消定时器，分别是：
  - 设置定时器运行时间总时长，时间到后取消定时器；
  - 设置计数器，重复执行任务次数达到上限，取消定时器；

```javascript
#!/usr/bin/node

console.log("start");

const time = global.setInterval(loop,500);

function loop(){
  // count ++;
  console.log('I will loop forever');
  if(count === 6){
  		clearInterval(time);
	}
}
// method1
global.setTimeout(function(){
  global.clearInterval(time);
  console.log('end');
},3000);
// method2
var count = 0;
```