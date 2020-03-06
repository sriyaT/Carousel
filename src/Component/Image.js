import React from "react";

import Text from "../Component/Text";

let mainImageStyle ={
    minWidth:"100%",
    height: "auto",
    position:"relative"
}

let imgStyle = {
    width: "100%",
    padding:"0px",
    height:"100%"
}


const Image = (props) => {
    return(
           <div style={mainImageStyle}>
                <img style={imgStyle}  alt = "happersbazaar" src={props.item.src} />
                <Text text = {props.item.text} index={props.index} loa = {props.loa}/>
                
            </div>
            
    );
}

export default Image;