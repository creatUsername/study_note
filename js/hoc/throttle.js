// 节流函数是高阶函数里非常常用的一个实现
// 立即将函数执行之后的间隔内不再执行
// 还能支持是否立刻执行
var throttle = function (fn, delay, option) {
  var timer = null, _self = fn, opts = option || {}; // 保存需要被延迟执行的函数引用 配置引用
  return function () {
    var _that = this, args = arguments; // 保存内部函数的执行环境和参数
    if (timer) {
      return false;
    }
    if (opts.leading) {
      _self.apply(_that, args);
    }
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      !opts.leading && _self.apply(_that, args);
    }, delay || 500);
  }
}