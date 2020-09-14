// 广度优先遍历
const BFSdeepClone = obj => {
  let origin = [obj],
    copyObj = {},
    copy = [copyObj]
  // 去除环状数据
  let visitedQueue = [],
    visitedCopyQueue = []
  while (origin.length > 0) {
    let items = origin.shift(),
      _obj = copy.shift()
    visitedQueue.push(items)
    if (isTypeOf(items, 'object') || isTypeOf(items, 'array')) {
      for (let item in items) {
        let val = items[item]
        if (isTypeOf(val, 'object')) {
          let index = visitedQueue.indexOf(val)
          if (!~index) {
            _obj[item] = {}
            //下次while循环使用给空对象提供数据
            origin.push(val)
            // 推入引用对象
            copy.push(_obj[item])
          } else {
            _obj[item] = visitedCopyQueue[index]
            visitedQueue.push(_obj)
          }
        } else if (isTypeOf(val, 'array')) {
          // 数组类型在这里创建了一个空数组
          _obj[item] = []
          origin.push(val)
          copy.push(_obj[item])
        } else if (isTypeOf(val, 'function')) {
          _obj[item] = eval('(' + val.toString() + ')')
        } else {
          _obj[item] = val
        }
      }
      // 将已经处理过的对象数据推入数组 给环状数据使用
      visitedCopyQueue.push(_obj)
    } else if (isTypeOf(items, 'function')) {
      copyObj = eval('(' + items.toString() + ')')
    } else {
      copyObj = obj
    }
  }
  return copyObj
}
