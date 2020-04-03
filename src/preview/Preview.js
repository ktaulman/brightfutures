import React,{useState,useEffect} from 'react';


import {Route, Link,useLocation,useRouteMatch,Switch} from "react-router-dom";


//components
import TextSection from '../components/TextSection/TextSection';
import Spacer from '../components/Spacer/Spacer';
import Logo from '../components/Logo/Logo';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Button from '../components/Button/Button';
//Header Components
import Header from '../components/Header/Header';
import NavigationLinks from '../components/NavigationLinks/NavigationLinks'
//Non-Preview Content.
import FontPicker from 'font-picker-react';
import Footer from '../components/Footer/Footer'

//import CSS 
import './preview.css'

//Contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
    host:'preview.contentful.com'
})
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
        <>
       
        <TextSection
            label={titleMission}
            body={bodyMission}
        />
        </>
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
       console.log(entry.fields)
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
function PreviewNav(){
    console.log('function called')
    //VARIABLES
    //
    const {url}=useRouteMatch();
    //STATES 
    //
    //Set Fonts
    const [font,setFont]=useState('Open Sans')
    //Effect for Updating Buttons since they default to their own unique font.
    useEffect(()=>{
        const arr=Array.from(document.getElementsByClassName('FeatureCard__button'));
        arr.forEach(el=>{
            el.style.fontFamily=font;
        })
    },[font])

    //Set Spacer component so fixed menu doesn't cut off text.
    const [topNavHeight,setTopNavHeight]=useState(null);
  
    useEffect(()=>{
        console.log('component mount')
        function handleResize(){
            const fixedHeader=document.getElementById('PreviewNav')
            setTopNavHeight(fixedHeader.scrollHeight)
        }
        //run initially on mount
        handleResize();
        //add eventListener to window for resize
        window.addEventListener('resize',handleResize)
      
    },[])
    //RENDERING
    //
    //

    return(
    <>
    <div id='PreviewNav'className="PreviewNav">
    <div>
            PREVIEW NAVIGATION
        </div>
    <nav className='Preview__nav '>
        
        <Link  className={'Preview__link'}to={url}>Home</Link>
        <Link className={'Preview__link'} to={url+"/3NsR5rAC9LfDlmWyTrmJpq"}>Logo</Link>
        <Link  className={'Preview__link'}to={url+'/topNavBar'}>topNavBar</Link>
        <Link  className={'Preview__link'}to={url+'/6XkSCISzGt8d0R5ubciAwA'}>MissionStatement</Link>
        <Link  className={'Preview__link'}to={url+'/banner'}>Home Page Banner</Link>
        <Link  className={'Preview__link'}to={url+'/socialMediaLinks'}>socialMediaLinks</Link>
        <Link  className={'Preview__link'}to={url+'/4MRX3nqYjh3A3EbRNSIPxk'}>contactInformation</Link>
    </nav>
    <Spacer height={topNavHeight}/>
    
    <div className="fontPick"> 
           <label className="fontPick__label">Font Picker:</label>

            <FontPicker
                apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
                activeFontFamily={font}
                onChange={(nextFont)=>{setFont(nextFont.family)}}
                sort='popularity'
            />
            
            <Button
                label='PUBLISH TO LIVE PAGE'
                style={{
                     
                        fontSize:'12px',
                        padding:'0',
                        marginLeft:'10px'
                    }}
                handleClick={()=>{
                    console.log(e=>e.target);
                }}
                color='white'
                backgroundColor='green'
             />
        </div>
    </div>
    <Spacer height={`${(topNavHeight/2)+2}px`} id={'PreviewNav-Spacer'}/>
    </>
    )
}

export default function Preview(){
   
    const {path}=useRouteMatch();

    return(
        <>
        <PreviewNav/>
        <div id="Preview" className='Preview apply-font'>          
        <Route exact path={path}>

                <h1>Content Type:N/A,Whole Page Display</h1>
                <Header style={{background:'white',position:'relative'}}>
                    <DisplayLogo/>
                    <NavigationLinks noBackground/>
                </Header>

             <main 
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'100vw'
                    }}
                >   
                <DisplayMissionStatement/>
                <DisplayFeatureCard/>
                {/* <DropDownMenu/> */}
                <DisplayContactInformation/>

                <Footer>
                    <h1>Pave Foundation</h1> 
                </Footer>
            </main>
            </Route>
            
        <Route path={path+'/3NsR5rAC9LfDlmWyTrmJpq'}>
               <h1>Content Type: Logo</h1> 
                <br/>
                <DisplayLogo />
        </Route>

        <Route path={path+'/topNavBar'}>
                <h1>Content Type:topNavBar</h1> 
               
        </Route>

        <Route path={path+'/6XkSCISzGt8d0R5ubciAwA'}>
                 <h1>Content Type: MissionStatement</h1> 
                <DisplayMissionStatement/>
            </Route>

        <Route path={path+'/banner'}>
                <h1>Content Type:Home Page Banner</h1>
                <DisplayFeatureCard />
            </Route>

        <Route path={path+'/socialMediaLinks'}>
                <h1>Content Type:Social Media LInks</h1>
                <DisplaySocialMediaLinks/>
            </Route>
  
        <Route path={path+'/4MRX3nqYjh3A3EbRNSIPxk'}>
                <h1>Content Type: ContactInfo</h1>
                <DisplayContactInformation/>
            </Route>
           
        </div>
        </>
    )
}

      