import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './Components/Child'

const Context = createContext();

function App() {
  const [message, setMessage] = useState("Hello from App component (Parent component)")
  

  return (
    <>
      <div>
        <Context.Provider value = {message}>
          <Child  />
        </Context.Provider>
        
      </div>
    </>
  )
}

export default App

/*
Steps for context:
Step 1: Create Context in Global Scope.
Step 02: Wrap the child component with Context Provider to use
the context.
Step 03: Write value or attribute and pass the value 
to share.
Step 04: Introduce useContext hook in the child component where youu want to use
context also export it from the parent component.
*/

export {Context};
