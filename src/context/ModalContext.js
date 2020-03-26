import React from 'react';

export const ModalContext = React.createContext({
    isModalClicked:false,
    toggleModal:()=>{
           
        const main=document.querySelector('#main');
        const modal=document.querySelector('#ModalWrapper');
        if(this.isModalClicked){
            this.isModalClicked(false)
            main.classList.remove('--opacity')
            modal.classList.add('--displayNone')
        }else{
            this.isModalClicked(true)
            main.classList.add('--opacity')
           modal.classList.remove('--displayNone')
        }
    }
    
})