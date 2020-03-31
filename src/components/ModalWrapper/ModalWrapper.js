import React from 'react';
import './ModalWrapper.css'

export default function ModalWrapper({title,handleClose,children,displayModal}){
    console.log(handleClose)
    console.log(displayModal)
    return(
        <main style={!displayModal?{display:'none'}:null}className='ModalWrapper fadeIn' id='ModalWrapper'>
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