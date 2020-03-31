import './BrainTree.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
const dropIn=require('braintree-web-drop-in')


export default function BrainTree(){

  const [donation,setDonation]=useState(null);
  const [view,setView]=useState('donation')
  const [otherClicked,setOtherClicked]=useState(false);

  if(view==='donation'){
    

    return(
      <div style={{
        color:'green',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        fontSize:'24px'
      }}>
        <h2 style={{textTransform:'uppercase',margin:'5px 0px'}}> Donation </h2>
        <h3 style={{color:'black',fontSize:'26px',margin:'5px 0px'}}>$ {donation} </h3>
        <div >
           <button style={{fontSize:'14px'}} onClick={(e)=>setDonation(e.target.value)} value='1'>$1</button>
           <button style={{fontSize:'14px'}} onClick={(e)=>setDonation(e.target.value)} value='5'>$5</button>
            <button style={{fontSize:'14px'}} onClick={(e)=>setDonation(e.target.value)} value='10'>$10</button>
           <button style={{fontSize:'14px'}} onClick={(e)=>setDonation(e.target.value)} value='25'>$25</button>
            <button style={{fontSize:'14px'}} onClick={(e)=>setOtherClicked(!otherClicked)} >Other</button>
            </div>
          { otherClicked?
            <div style={{margin:'10px 0px'}}>
            $<input 
            
              style={{
                width:'auto',height:'auto',border:'none',outline:'none',
                fontSize:'20px',textAlign:'center',
                display:'inline'
              }} 
              onChange={(e)=>setDonation(e.target.value)}
              placeholder={'Set Amount Here...'}
              id='donation-other'
              ></input>
           </div>
           :null}
       
        <button style={{
          textTransform:'uppercase',
          marginTop:'12px',
          fontSize:'12px',
          padding:'5px 10px',
          borderRadius:'10px'
        }} onClick={()=>setView('dropin')}>Select Amount</button>
      </div>
    )
  }
  
  if(view==='dropin'){
    return(
      <>
      <DropIn donation={donation} />
      </>
    )
  }
}

function DropIn({donation}){

  useEffect(()=>{
    const button= document.querySelector('#submit-button')
    document.querySelector('#checkout-message').innerHTML='Loading...';
    
    axios.get('http://localhost:4000/client_token').then(res=>{
      
    dropIn.create({
      // authorization: 'sandbox_pgp32rz6_f49wh6h3ckcvv3dh',
      authorization:res.data,
      container:'#dropin-container',
      translations:{
        payingWith: 'Donating with {{paymentSource}}',
        chooseAnotherWayToPay: 'Choose another way to donate',
        chooseAWayToPay: 'Choose a way to donate',
        otherWaysToPay: 'Other ways to donate',
      },
      card:{
        cardholderName:true,
      },
      paypal: {
        flow: 'checkout',
      },
     paypalCredit: {
       flow: 'checkout',
      },
      venmo: true
    },function(createErr,instance){
      //error handling
      if(createErr) console.error(createErr)
      //submit payment method
      button.addEventListener ('click',function(){
        instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
          console.log(payload)
          axios.post('http://localhost:4000/checkout',{
            payment_method_nonce:payload.nonce,
            donation_amount:donation
          }
          )
          .then(res=>{
            console.log(document.querySelector('#checkout-message'))
            instance.teardown((teardownErr)=>{
              if(teardownErr) console.error('Could no tear down Drop-in UI!');
              else {
                console.info('Drop-in Ui has been torn down')
                document.querySelector('#submit-button').setAttribute('style','display:none')
                if(res.data.success){
                  document.querySelector('#checkout-message').innerHTML=`<h1>We successfully received your donation of $ ${donation}</h1>`
                }else{
                  document.querySelector('#checkout-message').innerHTML='Sorry something went wrong with your donation.'
                }
              }

              
            })
            
          })
        })
      })
    })
  })
},[])

 return(
   <div id='dropin-wrapper'>
      <div id='checkout-message'></div>
      <div id="dropin-container"></div>
      <button 
        style={{ 
          padding:'5px 10px',
          outline:'none',
          border:'none', 
          fontSize:'14px',
          backgroundColor: "rgb(126, 98, 172)",
          color:'#FFFFFF'
        }}
        id="submit-button">
        Submit Donation</button>
   </div>
 )
}
// }
// function HostedFields(){

//   useEffect(()=>{
//        braintree.client.create({
//         authorization: 'sandbox_pgp32rz6_f49wh6h3ckcvv3dh'
//       }, function (clientErr, clientInstance) {
//         if (clientErr) {
//           console.error(clientErr);
//           return;
//         }
//         var form = document.querySelector('#my-sample-form');
//         var submit = document.querySelector('input[type="submit"]');
//         // This example shows Hosted Fields, but you can also use this
//         // client instance to create additional components here, such as
//         // PayPal or Data Collector.
          

//         braintree.hostedFields.create({
//           client: clientInstance,
//           styles: {
//             'input': {
//               'font-size': '14px',
//               'margin':'0px'
//             },
//             'input.invalid': {
//               'color': 'red'
//             },
//             'input.valid': {
//               'color': 'green'
//             }
//           },
//           fields: {
//             donationAmount:{
//               selector:'#donation-amount'
//             },
//             number: {
//               selector: '#card-number',
//               placeholder: '4111 1111 1111 1111'
//             },
//             cvv: {
//               selector: '#cvv',
//               placeholder: '123'
//             },
//             expirationDate: {
//               selector: '#expiration-date',
//               placeholder: '10/2022'
//             }
//           }
//         },(hostedFieldsErr, hostedFieldsInstance)=> {
//           if (hostedFieldsErr) {
//             console.error(hostedFieldsErr);
//             return;
//           }

//           submit.removeAttribute('disabled');

//           form.addEventListener('submit', function (event) {
//             event.preventDefault();

//             hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
//               if (tokenizeErr) {
//                 console.error(tokenizeErr);
//                 return;
//               }

//               // If this was a real integration, this is where you would
//               // send the nonce to your server.
//               console.log('Got a nonce: ' + payload.nonce);
//             });
//           }, false);
//         });
//       });
//   }
//   )
// return(
//   <form action="/" id="my-sample-form" method="post">
//   <label for='donation-amount'>Donation Amount</label>
//   <div id='donation-amount'></div>

//   <label for="card-number">Card Number</label>
//   <div id="card-number"></div>

//   <label for="cvv">CVV</label>
//   <div id="cvv"></div>

//   <label for="expiration-date">Expiration Date</label>
//   <div id="expiration-date"></div>

//   <input type="submit" value="Submit" />
// </form>

// )
// }