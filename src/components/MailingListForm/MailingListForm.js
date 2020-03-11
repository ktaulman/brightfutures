import React,{useState} from 'react';
import './MailingListForm.css'


export default function MailingListForm ({label}){
    const [isComplete,setIsComplete]=useState(false);
    const [firstName,setFirstName]=useState(null);
    const [lastName,setLastName]=useState(null);
    const [email,setEmail]=useState(null)
    //error handling
    const [error,setError]=useState(null)
    
    function handleSubmit(){
        if(!firstName||!lastName||!email){
            setError("Fields are Missing")
            setTimeout(function(){
                setError(null)
            },2000)
        }else{
        setIsComplete(true);}
    }
    if(!isComplete){
        return(  
            <div className='MailingListForm'>
                <h2 
                    className='MailingListForm__label'
                >{label}</h2>
                <input 
                    placeholder='first name...'
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    className='MailingListForm__input'
                    ></input>
                <input 
                    placeholder="last name..."
                    onChange={(e)=>{setLastName(e.target.value)}}
                    className='MailingListForm__input'
                    ></input>
                <input 
                    placeholder='email address...'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='MailingListForm__input'
                    ></input>
                <button 
                    className='MailingListForm__button'
                    onClick={()=>handleSubmit()}
                    type='button'
                >
                    Submit
                </button>
                {error?<div className="MailingListForm__error">
                    {error}
                </div>:PageTransitionEvent}
            </div>
        )
    }
    else{
        setTimeout(function(
            
        ){
            return(
                <p id="mailingListThankYou"> Thank You for Signing Up</p>
            )
        },2000)
        
        
    }
}