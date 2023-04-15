function printThis() {
  console.log(this);
}

function printThisStrict() {
  "use strict";
  console.log(this);
}

printThis(); // "window" or "global"
printThisStrict(); // undefined

// 如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象
printThis.call(); // "window" or "global"
printThis.call(null); // "window" or "global"
// 严格模式下的 指针不会指向 全局对象 而是 undefined
printThisStrict.call(); // undefined