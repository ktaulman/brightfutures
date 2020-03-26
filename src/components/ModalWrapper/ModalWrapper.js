import React from 'react';

import './ModalWrapper.css'

export default function ModalWrapper({title,handleClose,children}){
    return(
        <main className='ModalWrapper --displayNone' id='ModalWrapper'>
            <section 
                className='ModalWrapper__header'
            >
                <h2 className="ModalWrapper__title">{title}</h2>

                <button 
                id='ModalWrapper__button'
                className='ModalWrapper__button'
                onClick={()=>handleClose()}
                >X</button>
            </section>
           <section className='ModalWrapper__content'>
             {children}
           </section>
        </main>
    )
}