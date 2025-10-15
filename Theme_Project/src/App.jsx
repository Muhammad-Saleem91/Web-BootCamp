import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './Component/Child'

const Context = createContext();


function App() {
  const [Theme, setTheme] = useState("Light")

  return (
    <>
      
      <Context.Provider value = {{Theme,setTheme}}>
        <Child  />
      </Context.Provider>
      
    </>
  )
}

export default App
export {Context}
