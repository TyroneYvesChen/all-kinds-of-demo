function MergeSort(arr, low, high) {
  const length = arr.length
  if (low === high) {
    return arr[low]
  }
  const mid = Math.floor((low + high) / 2)
  MergeSort(arr, low, mid)
  MergeSort(arr, mid + 1, high)
  merge(arr, low, high)
  return arr
}

function merge(arr, low, high) {
  const mid = Math.floor((low + high) / 2)
  let left = low
  let right = mid + 1
  const result = []
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      result.push(arr[left++])
    } else {
      result.push(arr[right++])
    }
  }
  while (left <= mid) {
    result.push(arr[left++])
  }
  while (right <= high) {
    result.push(arr[right++])
  }

  arr.splice(low, high - low + 1, ...result)
}

const test = [2, 34, 452, 3, 5, 785, 32, 345, 567, 322, 5]

console.log(MergeSort(test, 0, test.length - 1))
