// 分时函数
var arr = Array.from({ length: 1000 }, (_, i) => i);

// var renderFriendList = function (data) {
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = i;
//     document.body.appendChild(div);
//   }
// }

// renderFriendList(arr);

function timeChunk(data, fn, count) {
  var ary = Array.prototype.slice.call(data);
  var timer = null;
  var start = function () {
    for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
      fn(ary.shift())      
    }
  }

  return function () {
    timer = setInterval(function () {
      if (ary.length === 0) {
        return clearInterval(timer);
      }
      start();      
    }, 200)
  }
}

var chunkRenderFriendList = timeChunk(arr, function (i) {
  console.log("do", i);
  var div = document.createElement("div");
  div.innerHTML = i;
  document.body.appendChild(div);
}, 200)

chunkRenderFriendList(arr);