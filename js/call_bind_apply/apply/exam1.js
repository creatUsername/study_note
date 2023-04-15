// apply 方法调用一个具有给定this值的参数，以及一个数组（或者类数组对象）的形式提供的参数
const numbers = [1, 2, 3, 4, 5, 6];

const max = Math.max.apply(null, numbers);

console.log(max); // 6