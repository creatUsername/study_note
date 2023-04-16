// 高阶函数
// 高阶函数是指至少满足下列条件之一的函数
// 1. 函数可以作为参数被传递
// 2. 函数可以作为返回值输出

// 1. 回调函数
var getUserInfo = function (userId, callback) {
  $.ajax("http://xxx.com/getUserInfo?" + userId, function (data) {
    if (typeof callback === "function") {
      callback(data);
    }
  })
}

getUserInfo(13157, function (data) {
  console.log(data);
})

var hideElement = function (element) {
  element.style.display = "none";
}

var appendDiv = function (callback) {
  for (var i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.innerText = i;
    document.body.appendChild(div);
    if (typeof callback === "function") {
      callback(div);
    }
  }
}

appendDiv(hideElement);

// 2. Arrary.prototype.sort
var arr = [1, 4, 3, 6];

var sortMin = function (a, b) {
  return a - b;
}

var sortMax = function (a, b) {
  return b - a;
}

arr.sort(sortMin);
arr.sort(sortMax);
