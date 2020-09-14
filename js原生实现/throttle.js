function throttle(fn, time) {
  var canRun = true
  return function() {
    if (!canRun) return false
    canRun = false
    var that = this,
      args = arguments
    setTimeout(function() {
      fn.apply(that, args)
      canRun = true
    }, time || 500)
  }
}
setInterval(
  throttle(function() {
    console.log('hello world')
  }),
  100
)
