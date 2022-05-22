function Conver(number, base = 2) {
  let rem,
    res = '',
    digits = '0123456789ABCDEF',
    stack = []

  while (number) {
    rem = number % base
    stack.push(rem)

    number = Math.floor(number / base)
  }

  while (stack.length) {
    res += digits[stack.pop()].toString()
  }

  return res
}
