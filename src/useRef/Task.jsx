import React, { useRef } from 'react'

const Task = () => {

    const inputRef = useRef(null)

    const handleFocus = () => {
       inputRef.current.focus()
    }
  return (
    <div>
        <input ref={inputRef} type="text" name="name" id="" />
        <button onClick={handleFocus}>submit</button>
    </div>
  )
}

export default Task