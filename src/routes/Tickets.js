import React from 'react';


export default function Tickets(){
    const script=document.createElement('script')
    script.src='https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script.async=true;
    document.body.appendChild(script)
    console.log(window.EBWidgets)

    window.EBWidgets.createWidget({

    })

    return(
        <>
            
        </>
    )
}