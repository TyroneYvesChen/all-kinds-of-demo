class Rectangle {
  // constructor
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  // Getter
  get area() {
    return this.calcArea()
  }
  // Method
  calcArea() {
    return this.height * this.width
  }
}

const rectangle = new Rectangle(40, 20)
console.log(rectangle.area)
// 输出 800
// 继承
class Square extends Rectangle {
  constructor(len) {
    // 子类没有this,必须先调用super
    super(len, len)

    // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    this.name = 'SquareIng'
  }
  get area() {
    return this.height * this.width
  }
}
const square = new Square(20)
console.log(square.area)
// 输出 400
