// 递归
function febonaqie(n) {
  if (n <= 1) {
    arr.push(1)
    return
  }
  arr.push(n)
  febonaqie(n - 1) + febonaqie(n - 2)
}

// 遍历，因为递归会出现爆栈的情况。遍历这不会
function febonaqie2(n) {
  let arr = []

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      arr.push(1)
    } else {
      arr.push(arr[i - 1] + arr[i - 2])
    }
  }

  console.log(arr[n - 1])
  return arr[n - 1]
}

console.log(febonaqie2(100))
