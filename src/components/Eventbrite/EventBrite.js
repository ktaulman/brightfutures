import React,{useEffect} from 'react';

export default function EventBrite(){



return(
    <div id='eventbrite-container'>
    <div id="eventbrite-widget-container-100295540662"></div>
    </div>
)
}



    // const html=`  var exampleCallback = function() {
    //     console.log('Order complete!');
    // };
    
    // window.EBWidgets.createWidget({
    //     // Required
    //     widgetType: 'checkout',
    //     eventId: '100295540662',
    //     iframeContainerId: 'eventbrite-widget-container-100295540662',
    //     iFrameAutoAdapt:75,
    //     // Optional
    //     iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
    //     onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    // });
    // console.log(window.EBWidgets)`

// useEffect(()=>{
//     console.log('EventBrite.js useEffect');
//     const script1=document.createElement('script');
//     script1.src="https://www.eventbrite.com/static/widgets/eb_widgets.js";
//     script1.async=true;
//     script1.id='script1'

//     const script2=document.createElement('script')
//     script2.type='text/javascript'
//     script2.innerHTML=html;
//     script2.id='script2'
//     console.log(script1,script2)
//     document.body.appendChild(script1)
//     document.body.appendChild(script2)

// })
