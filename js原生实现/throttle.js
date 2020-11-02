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
function throttle2(func, wait) {
  let previous = 0
  return function() {
    let now = Date.now()
    let context = this
    let args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

function throttle3(func, wait) {
  let timeout
  return function() {
    let context = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
