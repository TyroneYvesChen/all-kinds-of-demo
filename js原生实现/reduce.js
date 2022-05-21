Array.prototype.myreduce = function (fn, initVal) {
  let result = initVal,
    i = 0
  if (typeof initVal === 'undefined') {
    result = this[i]
    i++
  }
  while (i < this.length) {
    result = fn(result, this[i])
  }
  return result
}
