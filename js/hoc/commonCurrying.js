// 通用柯里化函数
var currying = function (fn) {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(null, args);
    }
    Array.prototype.push.apply(args, [].slice.call(arguments));
    return arguments.callee;
  }
}
// 所有传参求和
const add = function () {
  return Array.prototype.reduce.call(arguments, function (a, b) {
    return a + b;
  })
}

var addCurrying = currying(add);

console.log(addCurrying(1));
console.log(addCurrying(2));
console.log(addCurrying(3, 4));
console.log(addCurrying()); // 10


const sort = function () {
  return Array.prototype.sort.call([].slice.call(arguments), function (a, b) {
    return a - b;
  });
}

var sortCurrying = currying(sort);

console.log(sortCurrying(1));
console.log(sortCurrying(2));
console.log(sortCurrying(3, 4, 6, 7));
console.log(sortCurrying()); // [1, 2, 3, 4, 5, 6, 7]

var getWife = function () {
  return [].slice.call(arguments).join(`;`);
}

var getWifeCurrying = currying(getWife);

console.log(getWifeCurrying("老大", "老二")("老三"));
console.log(getWifeCurrying("老四", "老五")()); // 老大;老二;老三;老四;老五
// 柯里化的作用
// 延迟计算
// 参数复用。当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选
// 动态创建函数

// example
// var addEvent = function (el, type, fn, capture) {
//   if (window.addEventListener) {
//     el.addEventListener(type, function (e) {
//       fn.call(el, e)
//     }, capture);
//   }else if (window.attachEvent) {
//     el.attachEvent("on" + type, function (e) {
//       fn.call(el, e)
//     })
//   }
// }

// var addEvent = (function () {
//   if (window.addEventListener) {
//     return function (el, type, fn, capture) {
//       el.addEventListener(type, function (e) {
//         fn.call(el, e)
//       }, capture);
//     }
//   }else if (window.attachEvent) {
//     return function(el, type, fn, capture) {
//       el.attachEvent("on" + type, function (e) {
//         fn.call(el, e)
//       })
//     }
//   }
// })()