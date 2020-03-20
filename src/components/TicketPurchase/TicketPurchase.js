import React,{useEffect} from 'react';

export default function TicketPurchase(){
    useEffect(()=>{    
        const script= document.createElement('script')
        //configure object with properties
        script.src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        script.async=true;
        document.body.appendChild(script)
        console.log(script.parentElement)
       
        console.log(document.getElementsByTagName('script'))
        console.log(window.EBWidgets)
        // window.EBWidgets.createWidget({
        //     widgetType: 'checkout',
        //     eventId: '100295540662',
        //     iframeContainerId: 'eventbrite-widget-container-100295540662',
    
        //     // Optional
        //     iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        // })
    },[])
    return(
        <div id='ticket'>
        <h1>2020 Camp:Preparing Our Girls for Center Stage</h1>
        <div id="eventbrite-widget-container-100295540662"></div>
        
        </div>
    )
}