function InsertionSort(arr) {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    const temp = arr[i]
    let j
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
