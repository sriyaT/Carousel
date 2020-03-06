import React,{Component} from "react";

import happersbazaar from "../assets/happersBazaar.jpg";
import maldives from "../assets/maldives.jpeg";
import paris from "../assets/paris.jpeg";
import switzerland from "../assets/switzerland.jpeg";
import Button from "../Component/Button";
import BottomImage from "../Component/BottomImage";
import Image from "../Component/Image";



const imageArr = [
    {
    src: happersbazaar,
    text: "Happer's Bazaar"
},
{
    src: maldives,
    text: "Maldives"
},
{
    src: paris,
    text: "Paris"
},
{
    src: switzerland,
    text: "Switzerland"
}];


class Carousels extends Component { 
    constructor(){
        super();
        this.myRef = React.createRef();
    }
    
    state = {
        activeImage:1
    } 
    buttonClickHandler = (type) =>{
        const activeImage = this.state.activeImage;
        const length = imageArr.length;
        console.log("coming");
        console.log("....",this.myRef);
        console.log(this.state.activeImage);
        console.log("imageArrayLength",imageArr.length);
        
        let val= type === "right" ? `${-400*activeImage}px` : `${-400*(activeImage-2)}px`;

        if(activeImage < length && type === "right"){
            this.myRef.current.style.transform=`translateX(${val})`;
            this.myRef.current.style.transition=".10s transform";
            this.setState({activeImage:activeImage +1});
        }
        if(activeImage > 1 && type === "left"){
            this.myRef.current.style.transform=`translateX(${val})`;
            this.myRef.current.style.transition=".10s transform";
            this.setState({activeImage:activeImage -1});
        }
         
        
        console.log(this.state.activeImage);
    }
    dotClickHandler = () =>{
        console.log("index",imageArr.index);
    }
 
    render(){
        let mainStyle = {
            margin :'auto',
            width:"400px",
            padding:"0px" ,
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"center",
            
        }
        let dotContainerStyle = {
            zIndex:"1000",
            position:"absolute",
            bottom:"2%",
            left:"45%",
            display: "flex",

          }
        let dotStyle = {
            width:"10px",
            height:"10px",
            backgroundColor: "black",
            cursor: "pointer",
            borderRadius:"50%",
            marginRight: "5px"
        }
        let styles = {
            margin :'auto',
            width:"400px",
            padding:"0px" ,
            display: "flex",
            overflow:"hidden",
            position:"relative",
            height:"300px",
            objectFit:"cover",
            
        }
        let bottomStyles = {
            margin: "0px",
            width:"59%",
            padding:"0px",
            display:"flex",
            overflow:"visible",
            position:"absolute",
            top:"55%",
            left:"20%"
        } 
        let imageStyling = {
            display:"flex",
            
        
        }

             
        return(
            <div className="main"style={mainStyle} >
                <div style={styles}  >
                    <Button type="right" clicked = {()=>this.buttonClickHandler("right")}/>
                    <Button type="left" clicked = {()=>this.buttonClickHandler("left")} />
                    <div style={dotContainerStyle} onClick = {this.dotClickHandler}>
                        {
                            imageArr.map((item,index)=>{
                                console.log("index",index)
                                console.log("item",item)
                                return(
                                    <div index={index+1} style={dotStyle}/>
                                )
                            }

                            )
                        }
                    </div>
                    
                    <div style={{
                        width:"100%",
                        display: "flex",
                    }}>
                    <div style={imageStyling} ref= {this.myRef}>
                        {
                        imageArr.map((item, index)=>{
                            return(
                                <Image item={item} index= {index +1} loa={imageArr.length}/>
                                
                            );
                        })
                        }
                    </div>
                   
                    </div>
                </div> 
                <div style={bottomStyles}>
                {
                    imageArr.map((item, index)=>{
                        return(
                            <BottomImage item={item}/>
                        );
                      })
                    }
                    
                </div>
            </div>
        );
    }
}

export default Carousels;

