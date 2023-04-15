// 可以使用 调用父构造函数call 方法 来实现继承
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

let tomato = new Food("tomato", 5);
console.log(tomato.name); // "tomato"

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

let transformers = new Toy("transformers", 200);
console.log(transformers.name); // "transformers"