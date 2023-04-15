// 使用call方法调用函数并指定上下文this

global.animal = "global";
global.sleepDuration = 300;

function greet() {
  var reply = [this.animal, "typically sleep between", this.sleepDuration].join(" ");
  console.log(reply);
}

greet(); // global typically sleep between 300

var obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours"
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
