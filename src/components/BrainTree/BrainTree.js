import React from 'react';

const button = document.querySelector('#submit-button');
const dropin = require('braintree-web-drop-in');
dropin.create   ({
   authorization: 'CLIENT_TOKEN_FROM_SERVER',
   container: '#dropin-container'
 }, function (createErr, instance) {
   button.addEventListener('click', function () {
     instance.requestPaymentMethod(function (err, payload) {
       // Submit payload.nonce to your server
     });
   });
 });



export default function BrainTree(){
return(
   <body>
   <div id="dropin-container"></div>
  <button id="submit-button">Request payment method</button>
   </body>
)
}