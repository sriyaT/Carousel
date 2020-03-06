import React from "react";

const Text = (props) =>{
    let textStyle = {
        fontFamily:"sanserif",
        fontStyle: "italic",
        fontSize:"25px",
        color:"#D10E70",
        position: "absolute",
        backgroundColor: "black",
        height: "31px",
        width: "95%",
        borderRadius: "10px 10px 10px 10px",
       left:"3%",
        bottom:"0%"
    }
    let numberStyle = {
        color:"white",
        position: "absolute",
        top: "4%",
        right: "4%",
        transform: "translate(-50%, -50%)",
        fontSize:"10px"
    }
    
    return(
        <div >
            <p style={textStyle} >{props.text}</p>
            <p style={numberStyle}>{props.index} of {props.loa}</p>
        </div>
    )
}

export default Text;