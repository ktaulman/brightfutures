import React from 'react';

const dropin = require('braintree-web-drop-in');
dropin.create({});
console.log(dropin)
export default function BrainTree(){
return(
   <body>
   <div id="dropin-container"></div>
  <button id="submit-button">Request payment method</button>
   </body>
)
}