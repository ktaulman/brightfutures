import React from 'react';
import './Button.css'

export default function Button({ style,label, handleClick, color, backgroundColor }) {
    return (
    <button 
        className='Button'
        style={{...style,
         backgroundColor:backgroundColor || '#AC9562',
        color: color || '#FFFFFF',
        
    }} onClick={() => handleClick()}>
        {label}
    </button>);
}
