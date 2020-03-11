import React from 'react';
import MailingListForm from './MailingListForm';

export default {
    component:MailingListForm,
    title:'Form'
}

export const BasicMailingForm= ()=>{
    return(
        <MailingListForm label={"Sign Up for Our Mailing List"} />
    )

}