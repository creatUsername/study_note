// currying 函数柯里化
// currying又名 部分求值 一个柯里化函数 首先会接受一些参数接受这些参数后这个函数并不会立即求值 而是继续返回另外一个函数
// 刚才传入的参数在函数形成的闭包中被保存起来,待到函数真正需要执行的时候之前传入的所有参数都会被一次性用于求值

// 一个用于计算每个月开销的函数
var cost = (function () {
  var total = 0;
  return function (money) {
    total += money;
    console.log(total);
    return total;
  }
})()

cost(100);
cost(200);
cost(300);

var pay = (function () {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      var money = 0;
      for(var i = 0; i < args.length; i++) {
        money+= args[i];
      }
      console.log(money);
      return money;
    } else {
      [].push.apply(args, arguments); // 通过apply可以批量添加数组
    }
  }
})()

pay(100, 200);
pay(300);
pay(400)
pay(); // 1000

// 编写一个通用的currying
var currying = function (fn) {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
}

var cow = function () {
  let pay = 0;
  for (var i = 0; i < arguments.length; i++) {
    pay += arguments[i];
  }
  console.log(pay);
}

var mou = currying(cow);

mou(1, 3, 5);
mou(1, 3, 5);
mou(1, 3, 5);
mou();