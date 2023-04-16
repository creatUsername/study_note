// 函数去柯里化
// 反柯里化的作用在与扩大函数的适用性，使本来作为特定对象所拥有的功能的函数可以被任意对象所用.
// obj.func(arg1, arg2) => func(obj, arg1, arg2)
Function.prototype.uncurrying = function () {
  var that = this;
  return function () {
    // var obj = Array.prototype.shift.call(arguments);
    // return that.apply(obj, arguments);
    return Function.prototype.call.apply(that, arguments);
  }
}

function sayHi() {
  return `Hello ` + this.name + [].slice.call(arguments);
}
var sayHiUncurrying = sayHi.uncurrying();
console.log(sayHiUncurrying({ name: "Jinggege" }, "ni", "hao")); // Hello Jinggegeni,hao

// uncurrying是定义在Function的prototype上的方法，因此对所有的函数都可以使用此方法
// 调用时候
// sayHiuncurrying = sayHi.uncurrying()
// 所以uncurrying中的 this 指向的是 sayHi 函数
// call.apply(that, arguments) 把 that 设置为 call 方法的上下文，然后将 arguments 传给 call方法
// SayHi.call.apply(SayHi, arguments) => SayHi.call(arg1, arg2, ...) => arg1.sayHi(arg2, arg3...)
// that 实际指向 sayHi，所以调用 sayHiuncurrying(arg1, arg2, ...) 相当于 sayHi.call（arg1, arg2, ...);
// sayHi.call（arg1, arg2, ...), call 函数把 arg1 当做 sayHi的上下文，然后把 arg2,... 等剩下的参数传给sayHi，因此最后相当于 arg1.sayHi(arg2,...);
