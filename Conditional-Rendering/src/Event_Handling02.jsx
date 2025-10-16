import React from 'react'

const Event_Handling02 = () => {

const [name, setName] = React.useState("")
function handleChanges(event){
    setName(event.target.value)
}
  return (
    <div>
        <input type="text" value={name} onChange={handleChanges} placeholder='Enter your name' />
        <p>Hello {name || "MS"} </p>
    </div>
  )
}

export default Event_Handling02