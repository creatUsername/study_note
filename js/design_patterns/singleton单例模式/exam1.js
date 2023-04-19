// 单例模式的定义是 保证一个类仅有一个实例，并提供一个访问它的全局访问点

var Singleton = function (name) {
  this.name = name;
}

Singleton.instance = null;

Singleton.prototype.getName = function () {
  return this.name;
}

Singleton.getInstance = function (name) {
  if (this.instance) {
    return this.instance;
  }
  return this.instance = new this(name);
}

var a = Singleton.getInstance("a");
var b = Singleton.getInstance("b");
console.log(a === b); // true