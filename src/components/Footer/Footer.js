import React from 'react';
import './Footer.css'


export default function Footer ({children}){
    return(
        <footer className='Footer'>
            <p className='Footer__title'>PAVE FOUNDATION</p>
            
            <section className="Footer__content">
                {children}
            </section>
        </footer>
    )
}