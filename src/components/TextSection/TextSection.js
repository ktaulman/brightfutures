import React from 'react';
import './TextSection.css'

export default function TextSection({title,body,color,centerAll,sameColorAll,href,linkTitle,bodyColor,handleRender,button}){
   
    return (
        <div 
            className="TextSection" 
            style={{textAlign:centerAll?'center':null}}
        >
            <h2 
                className="TextSection__label"
                style={{color:sameColorAll?color:color?color:"#62AC9A"}}
            >
                {title}
            </h2>
            <p 
                className="TextSection__body" 
                style={{color:sameColorAll?color:bodyColor?bodyColor:'#000000'}}
            >
                {body}
            </p>
            <a href={href} target='_blank' style={{color:"#45494E",fontSize:'24px'}} rel="noopener noreferrer">{linkTitle}</a>
        </div>
    )
}
