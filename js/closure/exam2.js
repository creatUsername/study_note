// 闭包作用 延续局部变量的寿命
// img 对象可以用于数据上报
// 图片天然可跨域又能兼容所有的浏览器
var report = function (src) {
  var img = new Image();
  img.src = src;
}
report("http://xxx.com/getUserInfo");
// 低版本的一些浏览器实现存在BUG导致 img是 report 函数中的局部变量
// 当report函数执行调用结束img局部变量可能就已经销毁掉了,
// 此时或许还没有来得及发送HTTP请求 此次请求就会漏掉
// 那么可以利用闭包对局部变量进行维护
var report = (function () {
  var imgs = [];
  return function (src) {
    let img = new Image();
    imgs.push(img);
    img.src = src;
  }
})()