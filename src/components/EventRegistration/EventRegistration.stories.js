import React from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import EventRegistration from './EventRegistration'


export default{
    component:EventRegistration,
    title:'Event Registration'
}


export const EventRegistrationPage=()=>{
    return(
        <EventRegistration/>
    )
}