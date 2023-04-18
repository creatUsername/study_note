// 透明的单例模式
var CreateDiv = (function () {
  var instance = null;
  var CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };

  CreateDiv.prototype.init = function () {
    var div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
  return CreateDiv;
})();

new CreateDiv("666");
new CreateDiv("777");

// 未实现单一原则, 没法复用创建Dom实例
// 缓存代理
var CreateDom = function (html) {
  this.html = html;
  this.init();
}

CreateDom.prototype.init = function () {
  let dom = document.createElement("div");
  dom.innerHTML = this.html;
  document.body.appendChild(dom);
}
// 单例做单例的事，创建Dom做创建Dom的事，不要耦合
var ProxySingletonCreateDiv = (function () {
  var instance = null;
  return function (html) {
    if (instance) {
      return instance;
    }
    return instance = new CreateDom(html);
  }
})();

new ProxySingletonCreateDiv("233");
new ProxySingletonCreateDiv("6663");