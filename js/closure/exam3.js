// 面向对象中的对象 常常用 过程与数据的结合 来形容
// 闭包函数 在过程的实现中 以环境的形式包含了数据
// 对象以方法的形式实现了过程,属性实现了数据
var clock = function () {
  var num = 0;
  return {
    call: function () {
      num++;
      console.log(num);
    }
  }
}
let timer = clock(); // 函数每次执行都返回了一个新的变量
let timer2 = clock(); // 函数每次执行都返回了一个新的变量
timer.call();
timer.call();
timer2.call();
timer2.call();

var timer3 = {
  called: 0,
  call: function () {
    this.called++;
    console.log(this.called);
  }
};

timer3.call(); // 1
timer3.call(); // 2
timer3.call(); // 3

function Clock() {
  this.called = 0;
}

Clock.prototype.call = function () {
  this.called++;
  console.log(this.called);
}

let timer4 = new Clock();
let timer5 = new Clock();
timer4.call(); // 1
timer4.call(); // 2
timer5.call(); // 1

class Oclock {
  constructor() {
    this.called = 0;
  }

  call() {
    this.called++;
    console.log(this.called);
  }
}

let timer6 = new Oclock();
timer6.call(); // 1
timer6.call(); // 2
timer6.call(); // 3