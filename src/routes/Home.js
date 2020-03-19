
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
// import TicketPurchase from '../components/TicketPurchase/TicketPurchase'
import twitterSVG from '../components/SocialLinks/twitter.svg';
import instagramSVG from '../components/SocialLinks/instagram.svg';
import facebookSVG from '../components/SocialLinks/facebook.svg';
import linkedinSVG from '../components/SocialLinks/linkedin.svg';
import photo_dancers from '../components/FeatureCard/photo_dancers.png';
import TicketPurchase from '../components/TicketPurchase/TicketPurchase'
//contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_API_KEY
})







export default function Home(){
    //set Headline
    const[title,setTitle]=useState(null);
    const[body,setBody]=useState(null);
    //set FeatureCard 
    const[titleFeatureCard,setTitleFeatureCard]=useState(null);
    const[captionFeatureCard,setCaptionFeatureCard]=useState(null);
    const[detailsFeatureCard,setDetailsFeatureCard]=useState(null)
    //set socialMediaLinks
    const [twitter,setTwitterUrl]=useState(null);
    const [facebook,setFacebookUrl]=useState(null);
    const [linkedin,setLinkedinUrl]=useState(null);
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
            setTitleFeatureCard(title);
            setCaptionFeatureCard(caption)
            setDetailsFeatureCard(details)
        //socialMediaLinks
        content.getEntry('2mSBA7L23BOJyXJwUuF4I').then(res=>{
            const{twitterUrl, facebookUrl,linkedinUrl,instagramUrl }=res.fields;
            setTwitterUrl(twitterUrl)
            setFacebookUrl(facebookUrl)
            setLinkedinUrl(linkedinUrl)
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
            {href:linkedin,svg:linkedinSVG}
        ]
    
return(
    <main style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
                marginTop:"100px"
            }}
            >   

                    <TextSection 
                        label={title||'loading'}
                        body={body||'loading'}
                        // handleRender={}
                    />

                    <Spacer height='10px'/>
             
                    <FeatureCard
                        backgroundImage={photo_dancers}
                        title={titleFeatureCard}
                        caption={captionFeatureCard}
                        description={detailsFeatureCard}
                        buttonsArray={[
                            {
                                textColor:'#FFFFFF',
                                backgroundColor:'#AC6F62',
                                href:"#",
                                label:'Buy Tickets'
                            },
                            {
                                textColor:'#000000',
                                backgroundColor:'#62AC9A',
                                href:"#",
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
                            component:<TextSection
                                label='How to Donate'
                                body='See below that our Strip payment systtem can take cash check and other forms of materials.'
                                color='#7E62AC'
                            />,
                            
                        },
                        {
                            backgroundColor:"#AC9562",
                            label:'Events',
                            component:<TicketPurchase/>
                        },
                        {
                            backgroundColor:"#AC6F62",
                            label:'Volunteer',
                            component:<TextSection
                                label='How to Volunteer'
                                body='We would like to have as many volunteers for our upcoming events as possible. Sign up today to hear frrom our team. '
                                color='#AC6F62'
                            />
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

            <MailingListForm label={"Sign Up for Our Mailing List"} />

            <Spacer height='10px'/>

            <ContactInfo
                phone={phone}
                email={email}
                address={mailing}
            />
            <Spacer height='10px'/>
   
            </main>)
            }