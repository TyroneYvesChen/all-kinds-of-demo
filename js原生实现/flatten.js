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
