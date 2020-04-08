import React,{useState,useEffect} from 'react';

//components
import TextSection from '../components/TextSection/TextSection';
import Logo from '../components/Logo/Logo'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import SocialLinks from '../components/SocialLinks/SocialLinks';
import ContactInfo from '../components/ContactInfo/ContactInfo'

const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
    host:'preview.contentful.com'
})

//import CSS 

    function DisplayLogo(){
        const [logoURL,setLogoURL]=useState(null)
        useEffect(()=>{
            content.getEntry('3NsR5rAC9LfDlmWyTrmJpq').then(res=>setLogoURL(res.fields.logo.fields.file.url))
        },[])
        return(
            <Logo url={logoURL}/> 
        )
    }
    
    function DisplayMissionStatement (){
        const[titleMission,setTitleMission]=useState(null);
        const[bodyMission,setBodyMission]=useState(null);
    
        useEffect(()=>{
            content.getEntry('6XkSCISzGt8d0R5ubciAwA').then(res=>{
        
                const {title,textBody}=res.fields;
                setTitleMission(title);
                setBodyMission(textBody);
            })
    
        })
        return(
            <TextSection
                title={titleMission}
                body={bodyMission}
            />
        )
    }
    
    function DisplayFeatureCard(){
         //set FeatureCard 
         const[backgroundFeatureCard,setBackgroundFeatureCard]=useState(null);
         const[titleFeatureCard,setTitleFeatureCard]=useState(null);
         const[captionFeatureCard,setCaptionFeatureCard]=useState(null);
         const[detailsFeatureCard,setDetailsFeatureCard]=useState(null);
         const[buttonOneLabelFeatureCard,setButtonOneLabelFeatureCard]=useState(null);
         const[buttonTwoLabelFeatureCard,setButtonTwoLabelFeatureCard]=useState(null);
         const[buttonOneURLFeatureCard,setButtonOneURLFeatureCard]=useState(null);
         const[buttonTwoURLFeatureCard,setButtonTwoURLFeatureCard]=useState(null)
        content.getEntry("XfArvtJCRzAdQzyZgIWbv").then(res=>{
            console.log(res.fields);
            const {title,caption,details,buttonOneLabel,buttonTwoLabel,buttonOneURL,buttonTwoURL}= res.fields;
            setBackgroundFeatureCard(res.fields.backgroundImage.fields.file.url)
            setTitleFeatureCard(title);
            setCaptionFeatureCard(caption);
            setDetailsFeatureCard(details);
            setButtonOneLabelFeatureCard(buttonOneLabel);
            setButtonTwoLabelFeatureCard(buttonTwoLabel);
            setButtonTwoURLFeatureCard(buttonTwoURL);
        })
        return(
            <FeatureCard
            backgroundImageURL={backgroundFeatureCard}
            title={titleFeatureCard}
            caption={captionFeatureCard}
            description={detailsFeatureCard}
            buttonsArray={[
                {
                    textColor:'#FFFFFF',
                    backgroundColor:'rgb(172, 149, 98)',
                    label:buttonOneLabelFeatureCard,
                    handleClick:()=>window.open("https://www.eventbrite.com/e/2020-camp-preparing-our-girls-for-center-stage-tickets-100295540662?ref=elink",'_blank'),
                },
                {
                    textColor:'#000000',
                    backgroundColor:'#62AC9A',
                    label:buttonTwoLabelFeatureCard,
                    handleClick:()=>window.open(buttonTwoURLFeatureCard,'_blank')
                }
            ]}
        /> 
        )
    }
    
    function DisplaySocialMediaLinks(){
        //SocialLinks Media
            const twitterSVG=require('../components/SocialLinks/twitter.svg') ;
            const instagramSVG=require('../components/SocialLinks/instagram.svg')
            const facebookSVG=require('../components/SocialLinks/facebook.svg');
         //set socialMediaLinks
         const [twitter,setTwitterUrl]=useState(null);
         const [facebook,setFacebookUrl]=useState(null);
         const [instagram,setInstagramUrl]=useState(null);
        useEffect(()=>{
            content.getEntry('2mSBA7L23BOJyXJwUuF4I').then(res=>{
               const{twitterUrl, facebookUrl,instagramUrl }=res.fields;
               setTwitterUrl(twitterUrl)
               setFacebookUrl(facebookUrl)
               setInstagramUrl(instagramUrl)
           })
        })
        return(
            <SocialLinks
                label='Get Connected'
                iconsArray={[
                    {
                        href:twitter,
                        svg:twitterSVG
                    },
                    {
                        href:facebook,
                        svg:facebookSVG
                    },
                    {
                        href:instagram,
                        svg:instagramSVG
                    }
                ]}
    
            />
        )
    }
    function DisplayContactInformation(){
        //set Contact Information
        const [phone,setPhone]=useState(null);
        const [email,setEmail]=useState(null);
        const [mailing,setMailing]=useState(null);
    
        //Contact Information 
        content.getEntry("4MRX3nqYjh3A3EbRNSIPxk").then(entry=>{    
           
            const{telephoneNumber,emailAddress,mailingAddress}=entry.fields;
            setPhone(telephoneNumber);
            setEmail(emailAddress);
            setMailing(mailingAddress)
        })
    
        return(
            <ContactInfo 
                phone={phone}
                email={email}
                mailing={mailing}
            />
        )
    }
export default{DisplayContactInformation,DisplayFeatureCard,DisplayLogo,DisplayMissionStatement,DisplaySocialMediaLinks}

