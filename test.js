function reverseStr(str) {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}

// console.log(reverseStr('1111'))

function unique(arr) {
  let obj = {}
  let data = []
  for (let key in arr) {
    if (!obj[key]) {
      obj[key] = true
      data.push(arr[key])
    }
  }
  return data
}

function bubbleSort(arr) {
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i] > arr[j]) {
        let item = arr[i]
        arr[i] = arr[j]
        arr[j] = item
      }
    }
  }
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let leftArr = []
  let rightArr = []
  let q = arr[0]

  arr.forEach(element => {
    if (element > q) {
      rightArr.push(element)
    } else {
      leftArr.push(Element)
    }
  })

  return [...quickSort(leftArr), q, ...quickSort(rightArr)]
}

function getFibonacci(n) {
  let arr = []
  let i = 0
  while (i < n) {
    if (i < 2) {
      arr.push(i)
    } else {
      arr.push(arr[i - 1] + arr[i - 2])
    }
    i++
  }
  return arr
}

function _call(obj) {
  const content = obj || window
  const fn = this
  const options = [...arguments].slice(1)
  content.fn = fn
  const result = content.fn(...options)
  delete content.fn
  return result
}

function _bind(obj) {
  const content = obj || window
  const options = [...arguments].slice(1)
  const fn = this
  return function() {
    return fn.call(content, ...options, ...arguments)
  }
}

function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

function flatten2(ary) {
  let result = []
  for (let key in ary) {
    let item = ary[key]
    if (Array.isArray(item)) {
      result = result.concat(flatten2(item))
    } else {
      result.push(item)
    }
  }

  return result
}

let ary = [1, [2, [3, [4, 5]]], 6, [1, [1, [0]]]]

console.log(flatten(ary))
