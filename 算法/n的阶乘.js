function factorial(num) {
  if (num < 0) {
    throw new Error('负数没有阶乘')
  }
  if (num === 1 || num === 0) {
    return 1
  }
  return num * factorial(num - 1)
}
