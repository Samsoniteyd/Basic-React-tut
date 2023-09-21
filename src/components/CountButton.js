import React, {useState, useEffect} from "react";

const CountButton = (props) => {
    // console.log(props)
    // console.log(props.incrementBy)

const  [currentCount, setCurrentCount] =  useState(0)
const handleClick = () => {
     setCurrentCount(currentCount + props.incrementBy)
}

const buttonStyles = {
    background: props.buttonColor,
    borderRadius: props.borderRadius
}


useEffect(()=>{
    // console.log("called when current count is updated ")
    if (currentCount==10){
        alert("the count is 10")
    }
}, [currentCount])
    return ( 
        <div>
           <button style={buttonStyles} onClick={handleClick}>+ {props.incrementBy} </button>
           <div>{currentCount}</div> 
        </div>
     );
}
 
export default CountButton;