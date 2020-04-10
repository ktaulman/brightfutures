
import React,{useEffect,useState} from 'react';
//components
import Spacer from '../components/Spacer/Spacer';
import TextSection from '../components/TextSection/TextSection';
import FeatureCard from '../components/FeatureCard/FeatureCard'


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
//THIS IS THE DELIVERY API ONLY FOR PUBLISHING
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_DELIVERY_API_KEY
})



export default function Home({openModal}){

     //STATES
     const [missionState,setMissionState]=useState(null);
     const [bannerState,setBannerState]=useState(null);
     const [socialMediaState,setSocialMediaState]=useState(null);
     const [contactInfoState,setContactInfoState]=useState(null);
    //Flip Loading State
    const isLoaded=(missionState&&bannerState&&socialMediaState&&contactInfoState)?true:false;

    //LIFECYCLES
     useEffect(()=>{
         //Get Mission State from Contentful
        content.getEntry('6XkSCISzGt8d0R5ubciAwA').then(res=>{
            console.log(res.fields)
            setMissionState(res.fields)
        }).catch(console.error)

        //Get Banner State from COntentful 
        content.getEntry("XfArvtJCRzAdQzyZgIWbv").then(res=>{
            setBannerState(res.fields)
        }).catch(console.error)
        //Get SocialMediaState from Contentful
        content.getEntry('2mSBA7L23BOJyXJwUuF4I').then(res=>{
            setSocialMediaState(res.fields)
        }).catch(console.error)
        //get Contact Info from Contentful
        content.getEntry("4MRX3nqYjh3A3EbRNSIPxk").then(entry=>{    
            setContactInfoState(entry.fields)
         })

    },[])

    
    //Setup Social Media LInks 
       //SocialLinks Media
   
   
  

function TextSectionAndDonate(){
    return(
        <>
            <TextSection
                title='How to Donate'
                body='Pledge an amount below start the donation process'
                color='#7E62AC'
            />
            <BrainTree/>

        </>
    )
}


///RENDERING 
//Conditional State 
if(!isLoaded){
    return(
        <div>

        </div>
    )
}



//Default Render
return(
    <main style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
                marginTop:"100px",
                width:'100vw'
            }}
            id='main'
            className='apply-font'
            >   
             
                    <TextSection 
                        title={missionState.title||'loading'}
                        titleColor={missionState.titleColor}
                        body={missionState.textBody||'loading'}
                        bodyColor={missionState.bodyColor}
                    />

                    <Spacer height='10px'/>
             
                            
                    <FeatureCard
                        backgroundImageURL={bannerState.backgroundImage.fields.file.url}
                        title={bannerState.title}
                        titleColor={bannerState.titleColor}
                        caption={bannerState.caption}
                        captionColor={bannerState.captionColor}
                        details={bannerState.details}
                        detailsColor={bannerState.detailsColor}

                        buttonsArray={[
                            {
                                textColor:bannerState.buttonOneColor||'#FFFFFF',
                                backgroundColor:bannerState.buttonOneBackground||'rgb(172, 149, 98)',
                                label:bannerState.buttonOneLabel,
                                handleClick:()=>window.open(bannerState.buttonOneURL,'_blank'),
                            },
                            {
                                textColor:bannerState.buttonTwoColor||'#000000',
                                backgroundColor:bannerState.buttonTwoBackground||'#62AC9A',
                                label:bannerState.buttonTwoLabel,
                                handleClick:()=>window.open(bannerState.buttonTwoURL,'_blank')
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
                                title='Our Upcoming Events'
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
                title={socialMediaState.title}
                titleColor={socialMediaState.titleColor}
                iconsArray={[
                    {
                        href:socialMediaState.twitterURL,
                        svg:twitterSVG
                    },
                    {
                        href:socialMediaState.facebookURL,
                        svg:facebookSVG
                    },
                    {
                        href:socialMediaState.instagramURL,
                        svg:instagramSVG
                    }
                ]}
             />

            <Spacer height='20px'/>

            <ContactInfo 
                title={contactInfoState.title}
                titleColor={contactInfoState.titleColor}
                phone={contactInfoState.telephoneNumber}
                phoneColor={contactInfoState.telephoneNumberColor}
                email={contactInfoState.emailAddress}
                emailColor={contactInfoState.emailAddressColor}
                address={contactInfoState.mailingAddress}
                addressColor={contactInfoState.mailingAddressColor}
            />
            <Spacer height='10px'/>
   
            </main>
         
    )
}