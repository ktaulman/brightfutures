import React from 'react';
import TextSection from './TextSection';


export default{
    component:TextSection,
    title:'TextSection'
}

export const regular =()=>{
    return(
        <TextSection 
            label={'Our mission is to grow children into dreamers.'}
            body={"With melody and movement,we foster the creativity of Atlanta’s growing minds through the art of dance. Our mission to teach life skills through hands-on training and events."}
        />
    )
}