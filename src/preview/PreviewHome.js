
import React,{useEffect,useState} from 'react';
//components
import Spacer from '../components/Spacer/Spacer';
import TextSection from '../components/TextSection/TextSection';
import FeatureCard from '../components/FeatureCard/FeatureCard';

import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import SocialLinks from '../components/SocialLinks/SocialLinks';

import MailingListForm from '../components/MailingListForm/MailingListForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'
//media imports 

//Import Social Media Links
import twitterSVG from '../components/SocialLinks/twitter.svg';
import instagramSVG from '../components/SocialLinks/instagram.svg';
import facebookSVG from '../components/SocialLinks/facebook.svg';


//have Modal Context available
// import {useModalContext} from '../context/ModalContext';
import BrainTree from '../components/BrainTree/BrainTree'

//contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_API_KEY
})




export default function Home({openModal}){
    //set logo
    //set navigation links 
    
    //set Headline
    const[title,setTitle]=useState(null);
    const[body,setBody]=useState(null);
    //set FeatureCard 
    const[backgroundFeatureCard,setBackgroundFeatureCard]=useState(null);
    const[titleFeatureCard,setTitleFeatureCard]=useState(null);
    const[captionFeatureCard,setCaptionFeatureCard]=useState(null);
    const[detailsFeatureCard,setDetailsFeatureCard]=useState(null)
    //set socialMediaLinks
    const [twitter,setTwitterUrl]=useState(null);
    const [facebook,setFacebookUrl]=useState(null);
    const [instagram,setInstagramUrl]=useState(null);
    //set Contact Information
    const [phone,setPhone]=useState(null);
    const [email,setEmail]=useState(null);
    const [mailing,setMailing]=useState(null);
  
    useEffect(()=>{   
        //headline 
        content.getEntry('6XkSCISzGt8d0R5ubciAwA').then(res=>{
            const {title,textBody}=res.fields;
            setTitle(title);
            setBody(textBody)
        })
        //featurecard
        content.getEntry("XfArvtJCRzAdQzyZgIWbv").then(res=>{
            const {title,caption,details}= res.fields;
            setBackgroundFeatureCard(res.fields.backgroundImage.fields.file.url)
            setTitleFeatureCard(title);
            setCaptionFeatureCard(caption)
            setDetailsFeatureCard(details)
        //socialMediaLinks
        content.getEntry('2mSBA7L23BOJyXJwUuF4I').then(res=>{
            const{twitterUrl, facebookUrl,instagramUrl }=res.fields;
            setTwitterUrl(twitterUrl)
            setFacebookUrl(facebookUrl)

            setInstagramUrl(instagramUrl)
        })
        //Contact Information 
        content.getEntry("4MRX3nqYjh3A3EbRNSIPxk").then(res=>{
            const{telephoneNumber,emailAddress,mailingAddress}=res.fields;
            setPhone(telephoneNumber);
            setEmail(emailAddress);
            setMailing(mailingAddress)
        })
        })

    },[])

   

    const icons=[
            {href:twitter,svg:twitterSVG},
            {href:instagram,svg:instagramSVG},
            {href:facebook,svg:facebookSVG},
        ]

//Setup modal being clicked 

function TextSectionAndDonate(){
    return(
        <>
            <TextSection
                label='How to Donate'
                body='Pledge an amount below start the donation process'
                color='#7E62AC'
            />
            <BrainTree/>

        </>
    )
}

return(
    <>

    <main style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
                marginTop:"100px",
                width:'100vw'
            }}
            id='main'
            >   
             
                    <TextSection 
                        label={title||'loading'}
                        body={body||'loading'}
                    />

                    <Spacer height='10px'/>
             
                    <FeatureCard
                        backgroundImageURL={backgroundFeatureCard}
                        title={titleFeatureCard}
                        caption={captionFeatureCard}
                        description={detailsFeatureCard}
                        buttonsArray={[
                            {
                                textColor:'#FFFFFF',
                                backgroundColor:'rgb(172, 149, 98)',
                                label:'Buy Tickets',
                                
                                handleClick:openModal
                            },
                            {
                                textColor:'#000000',
                                backgroundColor:'#62AC9A',
                                handleClick:()=>window.open("https://www.eventbrite.com/e/2020-camp-preparing-our-girls-for-center-stage-tickets-100295540662?ref=elink",'_blank'),
                                label:'Learn More'
                            }
                        ]}
                    /> 
            <Spacer height='10px'/>

            <DropDownMenu
                buttonsArray={
                    [
                        {
                            backgroundColor:'#7E62AC',
                            label:'Donate',
                            component:<TextSectionAndDonate/>,
                            
                        },
                        {
                            backgroundColor:"#AC9562",
                            label:'Events',
                            component:<TextSection 
                                color='rgb(172, 149, 98)'
                                label='Our Upcoming Events'
                                body=''
                                href="https://www.eventbrite.com/e/2020-camp-preparing-our-girls-for-center-stage-tickets-100295540662?ref=elink" 
                                linkTitle={'July 2020 Camp'}
                            />
                            
                        },
                        {
                            backgroundColor:"#AC6F62",
                            label:'Volunteer',
                            component:<MailingListForm label={"Sign Up to Be a Volunteer"}/> 
                        }
                    ]
                }
            />


            <Spacer height='10px'/>  

            <SocialLinks
                label={'Get Connected'}
                iconsArray={icons}
            />

            <Spacer height='10px'/>

            <Spacer height='10px'/>

            <ContactInfo
                phone={phone}
                email={email}
                address={mailing}
            />
            <Spacer height='10px'/>
   
            </main>
            </>)
            }