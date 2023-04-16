// 通用柯里化函数
// obj.func(...args) => func(obj, ...args)
var uncurrying = function (fn) {
  return function () {
    // var obj = Array.prototype.shift.call(arguments);
    // return fn.apply(obj, arguments);
    return Function.prototype.call.apply(fn, arguments);
  }
}

function sayHi() {
  return `Hello ` + this.name + [].slice.call(arguments);
}

var sayHiunCurrying = uncurrying(sayHi);
console.log(sayHiunCurrying({ name: "Jinggege" }, "ni", "hao"));

var test = "a,b,c";
console.log(test.split(","));
var split = uncurrying(String.prototype.split);
console.log(split(test, ","));

var $ = {};

var pushUncurring = uncurrying(Array.prototype.push);
var joinUncurring = uncurrying(Array.prototype.join);
$.push = function (obj) {
  pushUncurring(this, obj); // $ obj
}

$.push("666");
console.log($); // { '0': '666', push: [Function (anonymous)], length: 1 }