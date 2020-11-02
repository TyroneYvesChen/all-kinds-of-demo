function debounce(func, wait) {
  let timeout
  return function() {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

function debounce2(func, wait) {
  let timeout
  return function() {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    let callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, wait)

    if (callNow) func.apply(context, args)
  }
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce3(func, wait, immediate) {
  let timeout

  return function() {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
  }
}
