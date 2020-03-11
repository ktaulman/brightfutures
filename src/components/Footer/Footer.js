import React from 'react';
import './Footer.css'


export default function Footer ({children}){
    return(
        <footer className='Footer'>
            ALWAYS WANTED TO DANCE COMPANY
            {children}
        </footer>
    )
}