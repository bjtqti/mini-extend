//创建一个命名空间
var Xut = {};

Xut.CoreObject = function(){};

//实现继承
Xut.CoreObject.extend = function(props){
  var init, subObj;

  props = props || {};
  // 使用init创建构造函数
  // 如果没有提供init方法，则取父类的init，如果父类也没有，则用一个空方法代替
 
  init = props['init'] || props.init || this.prototype['init'] || this.prototype.init || function(){};
  // 使用一个闭包来避免循环引用的问题

  subObj = function(){
    init.apply(this, arguments);
  };

  // 继承父类的原型
  subObj.prototype = Xut.obj.create(this.prototype);
  // 重置构造函数
  subObj.prototype.constructor = subObj;
 
  // 使得子类也可以被继承
  subObj.extend = Xut.CoreObject.extend;

  // 把props上的属性和方法都加到subObj的原型上去
  for (var name in props) {
    if (props.hasOwnProperty(name)) {
      subObj.prototype[name] = props[name];
    }
  }

  return subObj;
};

/**
 * Object functions container
 * @type {Object}
 * @private
 */
Xut.obj = {};

/**
 * Object.create shim for prototypal inheritance
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
 *
 * @function
 * @param  {Object}   obj Object to use as prototype
 * @private
 */
Xut.obj.create = Object.create || function(obj){
  //Create a new function called 'F' which is just an empty object.
  function F() {}

  //the prototype of the 'F' function should point to the
  //parameter of the anonymous function.
  F.prototype = obj;

  //create a new constructor function based off of the 'F' function.
  return new F();
};

 


