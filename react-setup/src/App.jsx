import { useState } from 'react'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Hi Muhammad Saleem, I am exploring React</h1>
      <Counter />
    </>
  )
}

export default App
