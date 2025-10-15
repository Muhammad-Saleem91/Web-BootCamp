import React, { useContext } from 'react'
import { Context } from '../App'

const GreatGrandChild = () => {
  const message = useContext(Context);

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default GreatGrandChild