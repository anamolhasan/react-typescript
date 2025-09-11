import React, { useState } from 'react'

// type Name = {
//     name:string,
//     age:number
// }
interface Name {
    name:string,
    age:number
}

const Greeting = ({name, age}:Name) => {
  const [clickCount, setClickCount] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault()
    setInputValue(e.target.value)
  }

   return (
    <div>
        <p>My name is {name}</p>
        <p>My years is{age}</p>

        <button onClick={handleClick}>Click me</button>
        <p>Button clicked {clickCount}</p>


        <input type="text" name="" value={inputValue} onChange={handleInputChange} id="" />
        <p>current input {inputValue}</p>
    </div>
  )
}

export default Greeting