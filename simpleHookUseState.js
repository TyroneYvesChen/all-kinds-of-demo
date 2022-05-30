import React from 'react'
// 导入dom,用于更新组件
import ReactDom from 'react-dom'

let state
function useState(initState) {
  // 判断state 是否是初始化
  state = state ? state : initState
  function setState(newState) {
    // 更新数据
    state = newState
    // 调用函数，更新组件
    render()
  }

  return [state, setState]
}

// 重新渲染组件
function render() {
  ReactDom.render(<App />, document.getElementById('root'))
}

function App() {
  // 使用自定义 useState
  const [count, setCount] = useState(1)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>加1</button>
    </div>
  )
}

export default App
