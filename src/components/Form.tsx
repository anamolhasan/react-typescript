import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`my email is "${email}"`)
    }
  return (
    <div>
    
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form