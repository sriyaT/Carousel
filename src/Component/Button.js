import React from "react";
import arrowNextIcon from "../assets/right.png";

let buttonStyleRight = {
    width:"7%",
    overflow:"hidden",
    position:"absolute",
   right:"0%",
    top:"45%",
    zIndex: "1000"
}

let buttonStyleLeft = {
    width:"7%",
    overflow:"hidden",
    position:"absolute",
    left:"0%",
    top:"45%",
    zIndex: "1000"
}

let arrowStyleRight = {
    width: "100%"
}

let arrowStyleLeft = {
    width: "100%",
    transform: "rotate(180deg)"
}

const Button = (props) =>{
    return(
        <div >
            <button 
                style={props.type === "left" ? buttonStyleLeft : buttonStyleRight} 
                onClick = {props.clicked} >
                <img style={props.type ==="left" ? arrowStyleLeft : arrowStyleRight } 
                alt="" src = {arrowNextIcon} ></img></button>
            
        </div>
    );

}

export default Button;