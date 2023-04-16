// uncurrying
// 反柯里化的作用在与扩大函数的适用性，使本来作为特定对象所拥有的功能的函数可以被任意对象所用. obj.func(args) => func(obj, args)
Function.prototype.uncurrying = function () {
  var self = this; // 保留原函数
  return function () {
    var obj = Array.prototype.shift.call(arguments); // 截取参数首位
    return self.apply(obj, arguments);
    // 把 self设置为 call 的上下文 将 arguments 作为参数传递给了 call 方法, 取出了arguments 的首位 
    return Array.prototype.call.apply(self, arguments);
  }
}

var push = Array.prototype.push.uncurrying();
var obj1 = {
  length: 1,
  0: 1
};

push(obj1, 2);
console.log(obj1);