const cloneObject = function(source) {
  let target = {}
  for (key in source) {
    if (source.hasOwnProperty(key)) {
      let itemType = Object.prototype.toString.call(source[key]).slice(8, -1)
      switch (itemType) {
        case 'Object':
          target[key] = cloneObject(source[key])
          break
        case 'Array':
          let temp = []
          for (let i = 0; i < source[key].length; i++) {
            temp.push(source[key][i])
          }
          target[key] = temp
          break
        default:
          target[key] = source[key]
      }
    }
  }
  return target
}

const deepClone = function(obj = {}) {
  // 判断是否需要深拷贝，不是对象和数组
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  // 判断是否为一个数组
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  // 遍历对象
  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归【重点】
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
