// 寄生组合式继承

function inheritPrototype(subType, superType) {
  // 创建对象，创建父类原型的一个副本
  var prototype = Object.create(superType.prototype)
  // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  prototype.constructor = subType
  // 指定对象，将新创建的对象赋值给子类的原型
  subType.prototype = prototype
}

// 父类初始化实例属性和原型属性
function Father(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
Father.prototype.sayName = function () {
  alert(this.name)
}

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function Son(name, age) {
  Father.call(this, name)
  this.age = age
}
function _inherits(subType, superType) {
  // 创建对象，创建父类原型的一个副本
  // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  // 指定对象，将新创建的对象赋值给子类的原型
  subType.prototype = Object.create(superType && superType.prototype, {
    constructor: {
      value: subType,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })

  if (superType) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subType, superType)
      : (subType.__proto__ = superType)
  }
}

// 将父类原型指向子类
inheritPrototype(Son, Father)

// 新增子类原型属性
Son.prototype.sayAge = function () {
  alert(this.age)
}

var demo1 = new Son('TianTian', 21)
var demo2 = new Son('TianTianUp', 20)

demo1.colors.push('2') // ["red", "blue", "green", "2"]
demo2.colors.push('3') // ["red", "blue", "green", "3"]
