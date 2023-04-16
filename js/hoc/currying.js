// 函数柯里化
// 给函数分步传递参数,每次传递参数后部分应用参数,并返回一个更具体的函数
// 接受剩下的参数，这中间可嵌套多层这样的接受部分参数，直至返回最后结果
// 柯里化的过程就是逐步传参，逐步缩小函数适用范围逐步求解的过程
var concatWords = function () {
  return Array.prototype.join.call(arguments, "");
};
var concat3WordsCurring = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(concatWords("hello", "world", "i", "like", "girls"));
console.log(concat3WordsCurring("hello"));
console.log(concat3WordsCurring("hello")("world")("!"));

// 现在我们更进一步，如果要求可传递的参数不止3个，可以传任意多个参数，当不传参数时输出结果
var total = function () {
  return Array.prototype.reduce.call(arguments, function (a, b) {
    return a + b;
  })
}
var someNums = [1, 2, 3, 4, 5];
console.log(total.apply(null, someNums)); // 15
console.log(total(1, 2, 3, 4, 5)); // 15

// 但如果要求把每个数乘以10之后再相加
var add = function (items, multi) {
  return items.map(function (item) {
    return item * 10;
  }).reduce(function (a, b) {
    return a + b;
  });
}
console.log(add([1, 2, 3, 4, 5], 10)) // 150

// 使用柯里化实现这个方法
var addCurrying = function () {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return args.map(function (item) {
        return item * 10;
      }).reduce(function (a, b) {
        return a + b;
      })
    }
    [].push.apply(args, [].slice.call(arguments));
    return arguments.callee;
  }
}

var adds = addCurrying();
adds(1);
adds(2);
adds(3);
adds(4, 5);
console.log(adds());

// Function.prototype.bind 本身就是柯里化的实现
// 与 call/apply 方法直接执行不同，bind 方法 将第一个参数设置为函数执行的上下文，其他参数依次传递给调用方法（函数的主体本身不执行，可以看成是延迟执行），并动态创建返回一个新的函数， 这符合柯里化特点。
Function.prototype.testBind = function () {
  var that = this; // 保存函数引用
  var obj = Array.prototype.shift.call(arguments); // 被矫正的指针
  var args = [].slice.call(arguments);
  return function () {
    return that.apply(obj, [].slice.call(args));
  }
}
var foo = { x: 666 };
var bar = function (a, b, c) {
  console.log(this.x, a, b, c)
}.testBind(foo, 1, 2, 3, 4, 5, 6);
bar(1, 2, 3);