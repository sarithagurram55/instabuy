import React from "react";
import SuccessImage from '../assets/16.png';

export default function Checkout() {
    return(
        <div style={{display:'flex', justifyContent: 'center',margin:70 }} > 
            <img src={SuccessImage} height={500} />
        </div>
    )
}