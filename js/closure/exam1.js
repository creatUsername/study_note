// 闭包作用 封装变量
// 闭包可以帮助吧一些不需要暴露在全局的变量封装成 "私有变量"
// var multi = function () {
//   var a = 1;
//   for (var i = 0, l = arguments.length; i < l; i++) {
//     a = a * arguments[i];
//   }
//   return a;
// }
// console.log(multi(1, 2, 3)); // 6

// 加入缓存机制来提高函数的性能 v1
var cache = {}; // 无需暴露在全局 污染全局变量
var multi = function () {
  // arguments 是类数组对象没法直接调用数组方法
  var args = Array.prototype.join.call(arguments, ",");
  if (cache[args]) {
    return cache[args];
  }
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return cache[args] = a;
}
console.log(multi(1, 2, 3)); // 6
console.log(multi(1, 2, 3)); // 6

var multi = (function () {
  var cache = {}; // 无需暴露在全局 污染全局变量
  return function () {
    // arguments 是类数组对象没法直接调用数组方法
    var args = Array.prototype.join.call(arguments, ",");
    if (cache[args]) {
      return cache[args];
    }
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return cache[args] = a;
  }
})();
console.log(multi(1, 2, 3)); // 6
console.log(multi(1, 2, 3)); // 6

// 代码提炼
var muti = (function () {
  var cache = {}; // 封装局部变量
  var calculate = function () { // 可复用代码提炼函数 好的函数命名可以起到注释作用
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  }
  return function () {
    let args = Array.prototype.join.call(arguments, ",");
    if (cache[args]) {
      return cache[args];
    }
    return cache[args] = calculate.apply(null, arguments);
  }
})();
console.log(muti(1, 2, 3, 4));
console.log(muti(1, 2, 3, 4));