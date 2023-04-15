// 使用call 方法调用匿名函数
var animals = [
  { species: "Lion", name: "King" },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + this.species + ": " + this.name);
    }
    this.print();
  }).call(animals[i], i)
}

// #0Lion: King
// #1Whale: Fail