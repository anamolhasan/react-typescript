import React, { useRef } from 'react'
import Counter from './Counter'

const Task = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFocus = () => {
       inputRef.current?.focus()
    }
  return (
    <div>
        <input ref={inputRef} type="text" name="name" id="" />
        <button onClick={handleFocus}>submit</button>
        <Counter />
    </div>
  )
}

export default Task