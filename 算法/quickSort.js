function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let leftArr = []
  let rightArr = []
  let basic = arr[0]

  arr.forEach((val) => {
    if (val > basic) {
      rightArr.push(val)
    } else {
      leftArr.push(val)
    }
  })

  return [...quickSort(leftArr), basic, ...quickSort(rightArr)]
}
