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
