function ShellSort(arr) {
  const length = arr.length
  let gap = Math.floor(length)
  while (gap) {
    for (let i = gap; i < length; i++) {
      const temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && temp < arr[j]; j = j - gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}
