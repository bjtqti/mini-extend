# mini-extend
基于原型和构造函数实现的继承类

### 前言
  关于javascript是没有原生的继承语法的，为此我们需要借鉴其它语言（比如PHP)来模拟这一过程。
  这个库就是为了解决这个问题产生的。

### 基本用法
--------

1. 怎样创建一个最简单的类作为基类

```javascript 
var Video = Xut.CoreObject.extend();

```
2. 怎样创建一个类并指定构造函数

```javascript 
var Video = Xut.CoreObject.extend({
    init : function(){
    	//初始化代码放这里
    	//this.name = 'video';
    } 
 });

```

3. 怎样扩展类的原型

```javascript
//方式一:
Video.prototype.play = function(){
	alert(this.name)
}
//方式二:
var Video = Xut.CoreObject.extend({
    init : function(){
    	//初始化代码放这里
    	//this.name = 'video';
    },
    //直接在这里给出
    play : function() {
		alert(this.name);
	}
 });

```

4. 如何继承父类

```javascript

var Player = Video.extend({
	pause : function(){
		alert('paused')
	},
	error : function(){
		alert('error')
	}
});

var Media = Video.extend({
	name : 'meidaplayer',
	stop : function(){
		alert('stop')
	}
})

```

5. 子类怎样重写继承的方法

```javascript
//方式一
Player.prototype.play = function(){
	alert(this.name)
}

//方式二
var Player = Video.extend({
	init : function(){
		//重新定义构造函数
		this.name = 'new Player init'
	}
});

```

6. 如何创建对象实例

```javascript
var p = Player('www.xut.com/music.mp3');
p.play();

var m = Meida('www.xut.com/meida.mp3');
m.play();

```
### 优点

1.代码短小精悍

2.语法简洁明了

3.兼容性好
