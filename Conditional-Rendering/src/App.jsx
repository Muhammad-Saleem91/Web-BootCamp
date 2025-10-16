import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handle_login = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }

  return (
    
    <div className="App">
      <h1>Conditional Rendering</h1>
      

      {isLoggedIn ? <button onClick={handle_login} >Logout</button> : <button onClick={handle_login}>Login</button>}
      {isLoggedIn && <h2>Welcome back!</h2>}
      {!isLoggedIn && <h2>Please log in.</h2>}
    </div>
    
  )

  }

export default App


// Conditional Rendering :
// 1. Using if-else statement
// 2. Using Ternary Operator
// 3. Using Logical && Operator
