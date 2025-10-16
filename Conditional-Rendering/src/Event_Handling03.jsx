import React from 'react'
import { useState } from 'react'

const Event_Handling03 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function getCredentials(event){
        event.preventDefault();
        alert("Successfully Submitted. Here are your credentials: " + email + " and password: " + password)
        // Clearing Fields
        setEmail("")
        setPassword("")
        
    }
  return (
    <div>
        <form onSubmit={getCredentials}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder='Enter your email' /> <br /><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='Enter your password' /> <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Event_Handling03