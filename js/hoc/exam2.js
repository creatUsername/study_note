// 2. 函数作为返回值输出
// 1. 判断数据的类型
var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  }
}

var isArray = isType("Array");
var isString = isType("String");

console.log(isArray([1, 2, 3]));
console.log(isString("dasdsa"));

// 用循环语句批量注册方法
var Type = {};
var types = ["Array", "Object", "String"];
for (var i = 0, type;type = types[i++];) {
  (function (type) {
    Type[`is${type}`] = function (obj) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
  })(type)
}

console.log(Type.isArray([1, 2, 3]));

// 2. getSingle
function getSingle(fn) {
  var ret;
  return function () {
    return ret || (ret = fn.apply(this, arguments))
  }
}

var getScript = getSingle(function () {
  return document.createElement("script");
})

var script1 = getScript();
var script2 = getScript();
console.log(script1 === script2);