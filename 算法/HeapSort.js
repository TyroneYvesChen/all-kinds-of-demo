function HeapSort(arr) {
  const length = arr.length

  // 调整初始堆，调整完其实也确定了最大值
  // 但此时最大值是在 arr[0] 中
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, length)
  }

  // 把 arr[0](最大值)换到后面
  for (let i = length - 1; i >= 0; i--) {
    const temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    adjustHeap(arr, 0, i)
  }

  return arr
}

// size 是还需要调整的堆的大小
// 随着一个个最大值的确定，size 会越来越小
function adjustHeap(arr, position, size) {
  const left = position * 2 + 1
  const right = left + 1
  let maxIndex = position
  if (left < size && arr[left] > arr[maxIndex]) {
    maxIndex = left
  }
  if (right < size && arr[right] > arr[maxIndex]) {
    maxIndex = right
  }
  if (maxIndex !== position) {
    const temp = arr[position]
    arr[position] = arr[maxIndex]
    arr[maxIndex] = temp
    adjustHeap(arr, maxIndex, size)
  }
  return arr
}
