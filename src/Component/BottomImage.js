import React from "react";

let bttomImgStyle = {
    width: "100%",
    height: "90px",
    border:".5px solid black",
    objectFit: "cover",
}
let bottomStyle = {
    width:"100%",
    position:"relative"
}
const BottomImage = (props) =>{
    return(
        <div style={bottomStyle}>
            <img style={bttomImgStyle}  alt = "happersbazaar" src={props.item.src}/>
        </div>
    );
}

export default BottomImage;
