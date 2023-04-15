// 变量的作用域
(function () {
  var scope = 1;
  console.log(scope); // 1
})();
// console.log(scope); // ReferenceError: scope is not defined

// 变量的搜索是由内而外而非由外到内的
(function () {
  var outer = 3;
  function func() {
    var inner = 2;
    console.log(outer, inner); // 3 2
  }
  func();
  // console.log(inner, outer); // ReferenceError: inner is not defined
})();

// 变量的生存周期
// 全局变量的生存周期是永久的除非主动销毁这个变量
function say() {
  var a = 1;
  console.log(a); // 退出了函数，局部变量就失去了价值被回收销毁
}
say(); // 1
say(); // 1

var Sno = (function () {
  var a = 0;
  return function () {
    a++;
    console.log(a); // 形成引用关系暴露出去被外界引用,则维护了一个局部变量保存起来
  }
})();
Sno(); // 1
Sno(); // 2