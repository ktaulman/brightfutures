
import React,{useEffect,useState} from 'react';

import Spacer from '../components/Spacer/Spacer';
import TextSection from '../components/TextSection/TextSection';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import photo_dancers from '../components/FeatureCard/photo_dancers.png';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import twitter from '../components/SocialLinks/twitter.svg';
import instagram from '../components/SocialLinks/instagram.svg';
import facebook from '../components/SocialLinks/facebook.svg';
import linkedin from '../components/SocialLinks/linkedin.svg';
import MailingListForm from '../components/MailingListForm/MailingListForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'
const axios = require('axios').default;


//.env variables





export default function Home(){
    const[title,setTitle]=useState(null);
    const[body,setBody]=useState(null);


    useEffect(()=>{
        const spaceId=process.env.REACT_APP_CONTENTFUL_SPACE_ID
        const apiKey=process.env.REACT_APP_CONTENTFUL_API_KEY
        //Load Text Section Data
        axios
            .get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${apiKey}`)
            .then(res=>{
              setTitle(res.data.items[0].fields.title)
             setBody(res.data.items[0].fields.textBody)
            }
        )
        //Load Feature Card 
        axios
        .get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${apiKey}`)
        .then(res=>{
        setTitle(res.data.items[0].fields.title)
         setBody(res.data.items[0].fields.textBody)
        }
    )
    },[])

    const icons=[
            {href:'https://twitter.com',svg:twitter},
            {href:'https://instagram.com',svg:instagram},
            {href:'https://facebook.com',svg:facebook},
            {href:'https://linkedin.com',svg:linkedin}
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
                        title={'2020 Camp Girl Magic'}
                        caption={'June 6-10,2020'}
                        description={'The Art and Passion of Dance for Our Youth'}
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
                phone={"407-568-8967"}
                email={'info@awtdance.online'}
                address={"3000 Winderhall Rd, Atlanta, GA 30326"}
            />
            <Spacer height='10px'/>
            </main>)
            }