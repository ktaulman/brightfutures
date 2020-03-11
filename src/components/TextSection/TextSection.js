import React from 'react';
import './TextSection.css'

export default function TextSection({label,body,color,centerAll,sameColorAll,handleRender}){
   
    return (
        <div 
            className="TextSection" 
            style={{textAlign:centerAll?'center':null}}
        >
            <h2 
                className="TextSection__label"
                style={{color:sameColorAll?color:color?color:"#62AC9A"}}
            >
                {label}
            </h2>
            <p 
                className="TextSection__body" 
                style={{color:sameColorAll?color:'#000000'}}
            >
                {body}
            </p>
        </div>
    )
}
