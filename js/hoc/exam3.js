// 高阶函数实现AOP
// AOP (面向切面编程) 主要作用是把一些跟核心业务逻辑无关的功能抽离出去,通常由 日志统计,安全控制, 异常处理等
// 功能抽离出来之后再 "动态织入" 的方式掺入业务逻辑模块中
Function.prototype.before = function (beforeFn) {
  var _self = this; // 保存原函数的引用 xxx.before
  return function () { // 返回包含原函数和新函数的代理函数
    beforeFn.apply(this, arguments); // 执行新函数修正this
    return _self.apply(this, arguments); // 执行原函数
  }
}

Function.prototype.after = function (afterFn) {
  var _self = this; // 保存原函数的引用 xxx.before
  return function () { // 返回包含原函数和新函数的代理函数
    var ret = _self.apply(this, arguments); // 执行原函数
    afterFn.apply(this, arguments); // 执行新函数修正this
    return ret;
  }
}

var myDay = {
  before: "起床",
  beforeTime: 1,
  work: "工作",
  workTime: 8,
  after: "撩妹子",
  going: function (time) {
    console.log(this.work, time)
  }
}

myDay.going = myDay.going.before(function (time) {
  console.log(this.before, time - this.beforeTime)
}).after(function (time) {
  console.log(this.after, time + this.workTime)
})

myDay.going(9);
