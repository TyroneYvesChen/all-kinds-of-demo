//简写
function reverseString1(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

//使用for循环
function reverseString2(str) {
  var newStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

//使用递归
function reverseString3(str) {
  if (str === '') {
    return ''
  } else {
    return reverseString3(str.substr(1)) + str.charAt(0)
  }
}

//递归简写
function reverseString4(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
}
