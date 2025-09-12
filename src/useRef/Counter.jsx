import React, { useRef, useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const renderCount = useRef(0)

  renderCount.current = renderCount.current + 1


  return (
    <div>
        <p>Count : {count}</p>
        <p>Render Count : {renderCount}</p>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter