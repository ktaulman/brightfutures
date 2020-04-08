import React from 'react';


export default function Input({type,value,color,width,height}){
    return(
        <input 
        style={{
            margin:'0',
            padding:'0',
            border:'solid red 3px',
            color:color,
            width:width,
            height:height,
        }}
        type={type}
        value={value}
        className='Preview__input'
        />
    
    )
}