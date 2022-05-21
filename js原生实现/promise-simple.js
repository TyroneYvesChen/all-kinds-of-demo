class MyPromise {
  constructor(fn) {
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    this.state = 'PADDING'
    this.value = ''
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.state === 'PADDING') {
      this.state = 'RESOLVED'
      this.value = value
      this.resolvedCallbacks.forEach((cb) => cb())
    }
  }

  reject(value) {
    if (this.state === 'PADDING') {
      this.state = 'REJECTED'
      this.value = value
      this.rejectedCallbacks.forEach((cb) => cb())
    }
  }

  then(resolve = function () {}, reject = function () {}) {
    if (this.state === 'PADDING') {
      this.resolvedCallbacks.push(resolve)
      this.rejectedCallbacks.push(reject)
    }
    if (this.state === 'RESOLVED') {
      resolve(this.value)
    }
    if (this.state === 'REJECTED') {
      reject(this.value)
    }
  }
}
