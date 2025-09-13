import React, { useRef } from 'react'

const Counter = () => {

  const ref = useRef<number>(0)
  console.log(ref)

  const handleClick = () => {
    ref.current = ref.current + 1
       alert(`${ref.current}`)
  }

  return (
    <div>
      
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter