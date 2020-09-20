function create(proto) {
  function F() {}
  F.prototype = proto
  return new F()
}

// Parent
function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function() {
  console.log(this.name)
}

// Child
function Child(age, name) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = create(Parent.prototype)
Child.prototype.constructor = Child

Child.prototype.sayAge = function() {
  console.log(this.age)
}

// 测试
const child = new Child(18, 'Jack')
child.sayName()
child.sayAge()
