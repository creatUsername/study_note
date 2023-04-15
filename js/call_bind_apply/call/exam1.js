// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

let food = new Food("cheese", 5);
console.log(food); // { name: 'cheese', price: 5, category: 'food' }
