function unique(arr) {
  let obj = {}
  let data = []
  for (let key in arr) {
    if (!obj[key]) {
      obj[key] = true
      data.push(arr[key])
    }
  }
  return data
}
