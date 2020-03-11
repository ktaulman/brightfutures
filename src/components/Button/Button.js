import React from 'react';
import './Button.css'

export default function Button({ label, handleClick, color, backgroundColor }) {
    return (
    <button 
        className='Button'
        style={{
         backgroundColor:backgroundColor || '#AC9562',
        color: color || '#FFFFFF',
    }} onClick={() => handleClick()}>
        {label}
    </button>);
}
