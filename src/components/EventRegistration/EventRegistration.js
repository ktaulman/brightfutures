import React,{useState} from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Button from '../Button/Button';
import TextSection from '../TextSection/TextSection'


export default function EventRegistration({handleClick}){

    //isComplete show thank you 
    const [isComplete,setIsComplete]=useState(false);


    //Parent/Guardian
    const [guardianName,setGuardianName]=useState(null);
    const [email,setEmail]=useState(null);
    const [phone, setPhone]=useState(null);
    const [streetAddress,setStreetAddress]=useState(null);
    const [state,setState]=useState(null);
    const [city,setCity]=useState(null);
    const [zip,setZip]=useState(null);
    //Participant
    const [participantName,setParticipantName]=useState(null);
    const [age,setAge]=useState(null);
    const [dateOfBirth,setDateOfBirth]=useState(null);
    const [grade,setGrade]=useState(null);

    if(!isComplete){
        return(
            <form style={{fontFamily:'roboto-thin',maxWidth:'360px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <section style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%'
                }}>
                    <h2 style={{textAlign:'center',letterSpacing:"2.5px",textTransform:'uppercase',fontWeight:'normal',color:'#62AC9A'}}>
                        Parent/Guardian
                    </h2>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Name'
                        onChange={(e)=>setGuardianName(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Email'
                        onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                    <input 
                    style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Phone'
                        onChange={(e)=>setPhone(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Street Address'
                        onChange={(e)=>setStreetAddress(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='State'
                        onChange={(e)=>setState(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='City'
                        onChange={(e)=>setCity(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Zip'
                        onChange={(e)=>setZip(e.target.value)}
                    ></input>
                </section>
                <section style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%'
                }}>
                    <h2 style={{textAlign:'center',letterSpacing:"2.5px",textTransform:'uppercase',fontWeight:'normal',color:'#62AC9A'}}>
                        Participant
                    </h2>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Name'
                        onChange={(e)=>setParticipantName(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Age'
                        onChange={(e)=>setAge(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Date of Birth'
                        onChange={(e)=>setDateOfBirth(e.target.value)}
                    ></input>
                    <input 
                        style={{
                            fontFamily:'roboto-thin',
                            border:'none',
                            borderBottom:'1px grey solid',
                            width:'65%'
                        }}
                        type='text' 
                        placeholder='Grade'
                        onChange={(e)=>setGrade(e.target.value)}
                    ></input>
                </section>
                <Button label={"Submit"} handleClick={()=>setIsComplete(true)}/>
            </form>
        )
    }else{
        return(
                <TextSection 
                    title={"Thank You!"} 
                    body={`Please check your email at ${email} for event confirmation details.`}
                    
                />
        )
    }
}