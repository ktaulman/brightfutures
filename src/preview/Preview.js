//import React
import React,{useState,useEffect} from 'react';
//React Router (SPA)
import {Route, Link,useRouteMatch,NavLink} from "react-router-dom";

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
//
const contentful=require('contentful')
const contentful_M=require('contentful-management')
// //preview
const contentPreview= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
    host:'preview.contentful.com',
    hostUpload:'uploaded.contentful.com'
})
// //management
const contentManagement=contentful_M.createClient({
    accessToken:process.env.REACT_APP_CONTENTFUL_MANAGEMENT_API_KEY,
})
//
//

//MAIN DISPLAY COMPONENTS 
function DisplayLogo(){
    const [logoURL,setLogoURL]=useState(null)
    useEffect(()=>{
        contentPreview.getEntry('3NsR5rAC9LfDlmWyTrmJpq').then(res=>setLogoURL(res.fields.logo.fields.file.url))
    },[])
    return(
        <Logo url={logoURL}/> 
    )
}

function DisplayMissionStatement (){
    //STATES
    const[title,setTitle]=useState(null);
    const[body,setBody]=useState(null);
    const[titleColor,setTitleColor]=useState(null);
    const[bodyColor,setBodyColor]=useState(null)
   
    //LIFECYCLES//HOOKS
    //
    //set
    useEffect(()=>{
        contentPreview.getEntry('6XkSCISzGt8d0R5ubciAwA').then(res=>{
            const {title,titleColor,textBody,bodyColor}=res.fields;
            setTitle(title);
            setTitleColor(titleColor);
            setBody(textBody);
            setBodyColor(bodyColor);
        })

    },[])

    if(title && body){
    return(
        <>
       
        <TextSection
            title={title}
            body={body}
            color={titleColor}
            bodyColor={bodyColor}
        />
        </>
    )
    }
    return(
        <div>...Loading</div>
    )
}

function DisplayFeatureCard(){
    //state for component, starts null to be falsy then updates to an object.
    const [contentState,setContentState]=useState(null);

//Load Content Preview on Mount 
useEffect(()=>{
    contentPreview.getEntry("XfArvtJCRzAdQzyZgIWbv").then(res=>{
        setContentState(res.fields)
    })
    },[])
   
    //RENDERING
    //if loading
    if(!contentState) return <div>Loading...</div>
    
    
    //default view,properly rendered 
    //desconstruct properties
    const {title,titleColor,caption,captionColor,details,detailsColor,backgroundImage,buttonOneLabel,buttonOneColor,buttonOneBackground,buttonOneURL,buttonTwoLabel,buttonTwoColor,buttonTwoBackground,buttonTwoURL}=contentState;
    
   
    return(
        
        <FeatureCard
        backgroundImageURL={backgroundImage.fields.file.url}
        title={title}
        titleColor={titleColor}
        caption={caption}
        captionColor={captionColor}
        details={details}
        detailsColor={detailsColor}

        buttonsArray={[
            {
                textColor:buttonOneColor||'#FFFFFF',
                backgroundColor:buttonOneBackground||'rgb(172, 149, 98)',
                label:buttonOneLabel,
                handleClick:()=>window.open(buttonOneURL,'_blank'),
            },
            {
                textColor:buttonTwoColor||'#000000',
                backgroundColor:buttonTwoBackground||'#62AC9A',
                label:buttonTwoLabel,
                handleClick:()=>window.open(buttonTwoURL,'_blank')
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
    //
    const [contentState,setContentState]=useState(null)

    useEffect(()=>{
        contentPreview.getEntry('2mSBA7L23BOJyXJwUuF4I').then(res=>{
            console.log(res.fields)
            setContentState(res.fields)
       })
    },[])
    
    //Rendering 
    //
    //if state not loaded.
    if(!contentState) return (<div>Loading...</div>)
    
    //Default Rendering
    //destructure state
    const {title,titleColor,twitterURL,facebookURL,instagramURL}=contentState;
    console.log(title,titleColor)
    return(
        <SocialLinks
            title={title}
            titleColor={titleColor}
            iconsArray={[
                {
                    href:twitterURL,
                    svg:twitterSVG
                },
                {
                    href:facebookURL,
                    svg:facebookSVG
                },
                {
                    href:instagramURL,
                    svg:instagramSVG
                }
            ]}

        />
    )
}
function DisplayContactInformation(){
    const [contentState,setContentState]=useState(null)
   

    //Contact Information 
    useEffect(()=>{
        contentPreview.getEntry("4MRX3nqYjh3A3EbRNSIPxk").then(entry=>{    
            setContentState(entry.fields)
        })
    },[])
 
    //RENDERING
    //filter out before load
    if(!contentState){
        return <div>Loading...</div>
    }
    //destructure JSON data 
    const {title,titleColor,telephoneNumber, telephoneNumberColor,emailAddress,emailAddressColor,mailingAddress, mailingAddressColor}=contentState;
    
    console.log(telephoneNumberColor)
    return(
        <ContactInfo 
            title={title}
            titleColor={titleColor}
            phone={telephoneNumber}
            phoneColor={telephoneNumberColor}
            email={emailAddress}
            emailColor={emailAddressColor}
            address={mailingAddress}
            addressColor={mailingAddressColor}
        />
    )
}





//THIS IS THE HEADER NAVIGATION COMPONENT 
function PreviewNav(){

    //VARIABLES
    //
    const {url}=useRouteMatch();
    //STATES 
    //
    //Set Fonts
    const [font,setFont]=useState(null)
    //fetch font from Contenful for contentpicker
    useEffect(()=>{
        contentPreview.getEntry('3M7edk6wN4UrT9q8Ok93CA').then(entry=>setFont(entry.fields.font))
    },[])
   

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
        
        <Link  className={'Preview__link'}to={url+'/6XkSCISzGt8d0R5ubciAwA'}>MissionStatement</Link>
        <Link  className={'Preview__link'}to={url+'/XfArvtJCRzAdQzyZgIWbv'}>Home Page Banner</Link>
        <Link  className={'Preview__link'}to={url+'/2mSBA7L23BOJyXJwUuF4I'}>socialMediaLinks</Link>
        <Link  className={'Preview__link'}to={url+'/4MRX3nqYjh3A3EbRNSIPxk'}>contactInformation</Link>
    </nav>
    <Spacer height={topNavHeight}/>
    
   <div className="fontPick"> 
         {font? 
            <>
            <label className="fontPick__label">Font Picker:</label>
            <FontPicker
                apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
                activeFontFamily={font}
                onChange={(nextFont)=>{setFont(nextFont.family)
                }}
                sort='popularity'
            />
            </>
            :null
            }
            <Button
                label='UPDATE PREVIEW FONT'
                style={{
                     
                        fontSize:'12px',
                        padding:'0',
                        marginLeft:'10px'
                    }}
                handleClick={()=>{
                        //handle Function
                        function handleResult(res,color){
                            const DOM_result=document.querySelector('#fontPick-result')
                            DOM_result.innerHTML=res;
                            DOM_result.style.color=color||'black';
                            setTimeout(()=>{
                                document.querySelector('#fontPick-result').innerHTML=''
                            },3000)
                        }

                        contentManagement
                            .getSpace("8hea45tlyfai")
                            .then(space=>space.getEnvironment('master'))
                            .then(env=>env.getEntry('3M7edk6wN4UrT9q8Ok93CA'))
                            .then(entry=>{
                                entry.fields.font['en-US']=font;
                                return entry.update()
                            })
                            .then(res=>{
                                console.log(res)
                                handleResult('Updated to '+res.fields.font['en-US'],'green')
                                })
                            .catch(err=>handleResult('Error'+err,'red'))   
                }}
                color='white'
                backgroundColor='green'
             />
            <div id='fontPick-result' style={{fontSize:'12px',margin:'2px',}}></div>
        </div>
    </div>
    <Spacer height={`${(topNavHeight/2)+2}px`} id={'PreviewNav-Spacer'}/>
    </>
    )
}

//THIS IS THE ACTUAL FULL PAGE RENDER
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
                
                <DisplaySocialMediaLinks/>
                <DisplayContactInformation/>
                
                    <Footer>
                        
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/donate'>Donate</NavLink>
                        <NavLink to='/tickets'>Tickets</NavLink>
                        <NavLink to='/aboutUs'>About</NavLink>
                       
                        <NavLink to='/news'>News</NavLink>
                    </Footer>
            </main>
            </Route>
            
        <Route path={path+'/3NsR5rAC9LfDlmWyTrmJpq'}>
               <h1>Content Type: Logo</h1> 
                <br/>
                <DisplayLogo />
        </Route>


        <Route path={path+'/6XkSCISzGt8d0R5ubciAwA'}>
                 <h1>Content Type: MissionStatement</h1> 
                <DisplayMissionStatement/>
            </Route>

        <Route path={path+'/XfArvtJCRzAdQzyZgIWbv'}>
                <h1>Content Type:Home Page Banner</h1>
                <DisplayFeatureCard />
            </Route>

        <Route path={path+'/2mSBA7L23BOJyXJwUuF4I'}>
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

      