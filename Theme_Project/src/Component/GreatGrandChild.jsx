import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'
import '../Theme.css'

const GreatGrandChild = () => {
  const { Theme, setTheme } = useContext(Context)
  const handleClick = () => {
    if (Theme === "Light") {
        setTheme("Dark");
    }
    else {
        setTheme("Light");
    }
  }
  return (
    <div className='container' style={{ backgroundColor: Theme === "Light" ? "black" : "white", color: Theme === "Light" ? "white" : "black" }}>
        <button className='theme-btn' onClick= {handleClick} style={{color: Theme === "Light" ? "white" : "black"}}>Change Theme</button>
        <h3>Current Theme is {Theme}</h3>
    </div>
  )
}

export default GreatGrandChild