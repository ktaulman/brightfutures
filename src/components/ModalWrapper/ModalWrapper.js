import React,{useState} from 'react';

import './ModalWrapper.css'

export default function ModalWrapper({title,handleClose,children}){
    return(
        <main className='.ModalWrapper'>
            <section 
                className='ModalWrapper__header'
            >
                <h2 className="ModalWrapper__title">{title}</h2>

                <button 
                className='ModalWrapper__content'
                onClick={()=>handleClose()}
                >X</button>
            </section>
           <section className='ModalWrapper__content'>
             {children}
           </section>
        </main>
    )
}