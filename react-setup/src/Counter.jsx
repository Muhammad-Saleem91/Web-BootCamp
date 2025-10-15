import React from 'react'
import './Counter.css'

const Counter = () => {

  const [count, updateCount] = React.useState(0);

  const increment = () => {
    updateCount(count + 1);
  }

  const decrement = () => {
    if( count > 0 ){
      updateCount(count - 1);
    }
  }


  return (
    <div id='counter-div'><h1>Counter : {count}</h1>
    <button onClick={increment}>Increment</button>
    <br /> <br />
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter