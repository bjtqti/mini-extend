# mini-extend
基于原型和构造函数实现的继承类

### 前言
  关于javascript是没有原生的继承语法的，为此我们需要借鉴其它语言（比如PHP)来模拟这一过程。
  这个库就是为了解决这个问题产生的。

### 基本用法
--------
1.创建一个基类

```javascript 
var Video = Xut.CoreObject.extend({
    init : function(url){
      this.url = url;
    } 
 });

Video.prototype.play = function(){
	
	alert(this.url)
}

```
2.基于基类创建子类

```javascript
var Player = Video.extend({
	name : 'miniplayer'
});

var Media = Video.extend({
	name : 'meidaplayer'
})

```

3.重写父类的原型方法

```javascript
Player.prototype.play = function(){
	alert(this.name)
}

//Media的play方法不会受上面改写的影响

```

4. 创建对象实例
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