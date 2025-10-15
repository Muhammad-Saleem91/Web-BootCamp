import React from "react";
import './Child.css'
import image from './assets/Wadiwala-Motors-full-Sticker.png'

const ChildComponent = (props) => {

    // first method is to send to frrom child to parent is props and another is basically providing parameters in function call
    // props is basically an object which contains all the values passed from parent to child component
    // console.log(props);
    // const {title, description} = props;  // destructuring of props object
    return(
    <div className= "card">
        <img src={image} alt="Scenery View" className="card-img"/>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.description}</p>
        <button className="card-btn">Click Me</button>
    </div>
    )
}

export default ChildComponent