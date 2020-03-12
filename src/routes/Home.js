
import React,{useEffect,useState} from 'react';

import Spacer from '../components/Spacer/Spacer';
import TextSection from '../components/TextSection/TextSection';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import photo_dancers from '../components/FeatureCard/photo_dancers.png';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import twitterSVG from '../components/SocialLinks/twitter.svg';
import instagramSVG from '../components/SocialLinks/instagram.svg';
import facebookSVG from '../components/SocialLinks/facebook.svg';
import linkedinSVG from '../components/SocialLinks/linkedin.svg';
import MailingListForm from '../components/MailingListForm/MailingListForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'
const axios = require('axios').default;


//.env variables





export default function Home(){
    //set Headline
    const[title,setTitle]=useState(null);
    const[body,setBody]=useState(null);
    //set FeatureCard 
    const[titleFeatureCard,setTitleFeatureCard]=useState(null);
    const[captionFeatureCard,setcaptionFeatureCard]=useState(null);
    const[detailsFeatureCard,setDetailsFeatureCard]=useState(null)
    //set socialMediaLinks
    const [twitterUrl,setTwitterUrl]=useState(null);
    const [facebookUrl,setFacebookUrl]=useState(null);
    const [linkedinUrl,setLinkedinUrl]=useState(null);
    const [instagramUrl,setInstagramUrl]=useState(null);
    //set Contact Information
    const [telephoneNumber,setTelephoneNumber]=useState(null);
    const [emailAddress,setEmailAddress]=useState(null);
    const [mailingAddress,setMailingAddress]=useState(null);
  

    useEffect(()=>{
        const spaceId=process.env.REACT_APP_CONTENTFUL_SPACE_ID
        const apiKey=process.env.REACT_APP_CONTENTFUL_API_KEY
        //Load Text Section Data
        axios
            .get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${apiKey}`)
            .then(res=>{
                setTelephoneNumber(res.data.items[0].fields.telephoneNumber)
                setEmailAddress(res.data.items[0].fields.emailAddress)
                setMailingAddress(res.data.items[0].fields.mailingAddress)
                setLinkedinUrl(res.data.items[1].fields.linkedinUrl)
                setTwitterUrl(res.data.items[1].fields.twitterUrl)
                setFacebookUrl(res.data.items[1].fields.facebookUrl)
                setInstagramUrl(res.data.items[1].fields.instagramUrl)
                setTitle(res.data.items[2].fields.title)
                setBody(res.data.items[2].fields.textBody)
                setTitleFeatureCard(res.data.items[3].fields.title)
                 setcaptionFeatureCard(res.data.items[3].fields.caption)
                 setDetailsFeatureCard(res.data.items[3].fields.details)
            }
        )
    },[])

    const icons=[
            {href:twitterUrl,svg:twitterSVG},
            {href:instagramUrl,svg:instagramSVG},
            {href:facebookUrl,svg:facebookSVG},
            {href:linkedinUrl,svg:linkedinSVG}
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
                                label:'Registration'
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
                            />
                        },
                        {
                            backgroundColor:"#AC9562",
                            label:'Events',
                            component:<TextSection
                                label="Upcoming Events"
                                body="We have our upcoming Summer Camp from June 6-10, 2020."
                                color='#AC9562'
                            />
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
                phone={telephoneNumber}
                email={emailAddress}
                address={mailingAddress}
            />
            <Spacer height='10px'/>
            </main>)
            }