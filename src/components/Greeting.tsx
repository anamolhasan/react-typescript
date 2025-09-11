import React from 'react'

// type Name = {
//     name:string,
//     age:number
// }
interface Name {
    name:string,
    age:number
}

const Greeting = ({name, age}:Name) => {
  return (
    <div>
        <p>My name is {name}</p>
        <p>My years is{age}</p>
    </div>
  )
}

export default Greeting