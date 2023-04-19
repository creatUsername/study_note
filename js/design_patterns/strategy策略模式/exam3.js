// 1. 定义一系列的算法
function performanceLevelS(salary) {
  return salary * 4;
}

function performanceLevelA(salary) {
  return salary * 3;
}

function performanceLevelB(salary) {
  return salary * 2;
}

// 2. 把他们封装成一个策略类 其实就是一个对象 借用对象机制快速调用对应策略
// 这里其实就是多态的一种表现: 相同的行为 返回不同的现象
// 同一个接口(object),使用不同的实例(key)而执行不同操作(value)
var performanceStrategy = {
  "S": performanceLevelS,
  "A": performanceLevelA,
  "B": performanceLevelB
};
// 3. Context负责把请求委托给对应的策略对象去计算
var calcBonusL3 = function (level, salary) {
  return performanceStrategy[level] && performanceStrategy[level](salary);
};

console.log(calcBonusL3("S", 12000));
console.log(calcBonusL3("A", 20000));