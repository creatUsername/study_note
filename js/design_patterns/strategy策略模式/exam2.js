// 使用组合函数重构
/**
 * 
 * @param {string} performanceLevel 绩效
 * @param {number} salary 奖金
 */
var calcBonusL2 = function (performanceLevel, salary) {
  if (performanceLevel === "S") {
    return performanceLevelS(salary);
  }
  if (performanceLevel === "A") {
    return performanceLevelA(salary);
  }
  if (performanceLevel === "B") {
    return performanceLevelB(salary);
  }
  return salary;
}

function performanceLevelS(salary) {
  return salary * 4;
}

function performanceLevelA(salary) {
  return salary * 3;
}

function performanceLevelB(salary) {
  return salary * 2;
}

console.log(calcBonusL2("S", 12000));
console.log(calcBonusL2("A", 20000));