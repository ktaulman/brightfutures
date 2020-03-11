import React from 'react';
import ContactInfo from './ContactInfo';

export default{
    component:ContactInfo,
    title:"ContactInfo"
}

export const defaultState=()=>{
    return(
        <ContactInfo />
    )
}
export const FilledOut =()=>{
   return( <ContactInfo
        phone={"407-568-8967"}
        email={'info@awtdance.online'}
        address={"3000 Winderhall Rd, Atlanta, GA 30326"}
    />)
}