import React from 'react'

const Event_Handling = () => {
const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>Event Handling</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}

export default Event_Handling