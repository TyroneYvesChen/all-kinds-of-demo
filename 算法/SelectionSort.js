/*
 寻找第i小的数的位置，放到i位置上
 */
function SelectionSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) {
      minIndex = arr[minIndex] <= arr[j] ? minIndex : j
    }
    if (minIndex !== i) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}
