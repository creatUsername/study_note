// 策略模式: 定义一系列算法，把它们一个个封装起来,并且使他们可以相互替换
// 1. 使用策略模式计算奖金
/**
 * 
 * @param {string} performanceLevel 绩效
 * @param {number} salary 奖金
 */
var calcBonusL1 = function (performanceLevel, salary) {
  if (performanceLevel === "S") {
    return salary * 4;
  }
  if (performanceLevel === "A") {
    return salary * 3;
  }
  if (performanceLevel === "B") {
    return salary * 2;
  }
  return salary;
}

console.log(calcBonusL1("S", 12000));
console.log(calcBonusL1("A", 20000));

// 问题
// 1. calcBonusL1 函数比较庞大，有很多if lese 这些语句需要覆盖所有的逻辑分支
// 2. calcBonusL1 函数缺乏弹性，如果想新增一个绩效C或者修改一个绩效系数就要深入到calcBonusL1函数内部修改，违反了开放封闭原则
// 3. 算法复用性比较差,没法在其他地方复用这个算法