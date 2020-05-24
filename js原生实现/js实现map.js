Array.prototype.map = function(callback) {
  var arr = this
  return arr.reduce((acc, cur, i) => {
    acc.push(callback(cur, i, arr))
    return acc
  }, [])
}
var m = [1, 2, 3, 4, 54].map(function(v, i, arr) {
  return v * v
})
console.log(m)

Array.prototype.my_map = function(callback) {
  if (!Array.isArray(this) || !this.length || typeofcallback !== 'function') {
    return []
  } else {
    let result = []
    for (let index = 0; index < this.length; index++) {
      const element = this[index]
      result.push(callback(element, index, this))
    }
    return result
  }
}

Array.prototype.fakeMap = function(fn, context) {
  let arr = this
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr)
    temp.push(result)
  }
  return temp
}
