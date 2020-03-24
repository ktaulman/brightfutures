import React from 'react';
import './Footer.css'


export default function Footer ({children}){
    return(
        <footer className='Footer'>
            PAVE FOUNDATION
            {children}
        </footer>
    )
}