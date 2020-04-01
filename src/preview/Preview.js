import React,{useState,useEffect} from 'react';


import {Route, Link,useLocation,useRouteMatch,Switch} from "react-router-dom";


//components
import TextSection from '../components/TextSection/TextSection';
import Spacer from '../components/Spacer/Spacer'
import './preview.css'

//Contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_API_KEY
})

function MissionStatement (){
    const[titleMission,setTitleMission]=useState(null);
    const[bodyMission,setBodyMission]=useState(null);

    useEffect(()=>{
        content.getEntry('6XkSCISzGt8d0R5ubciAwA').then(res=>{
            console.log(res.fields)
            const {title,textBody}=res.fields;
            setTitleMission(title);
            setBodyMission(textBody);
        })

    })
    return(
        <TextSection
            label={titleMission}
            body={bodyMission}
        />
    )
}
export default function Preview(){
   
    const {path,url}=useRouteMatch();
    //Set MissionStatement
    

    return(
        <div className='Preview'>
            <h1>Contentful Preview</h1>
            <hr/>
            
            <nav className='Preview__nav'>
                <Link  className={'Preview__link'}to={url}>Home</Link>
                
                <Link  className={'Preview__link'}to={url+'/logo'}>Logo</Link>
                <Link  className={'Preview__link'}to={url+'/topNavBar'}>topNavBar</Link>
                <Link  className={'Preview__link'}to={url+'/6XkSCISzGt8d0R5ubciAwA'}>MissionStatement</Link>
                <Link  className={'Preview__link'}to={url+'/banner'}>Home Page Banner</Link>
                <Link  className={'Preview__link'}to={url+'/socialMediaLinks'}>socialMediaLinks</Link>
                <Link  className={'Preview__link'}to={url+'/contactInformation'}>contactInformation</Link>
            </nav>
      
            <Spacer height={'20px'}/>   
            <Route path={path+'/6XkSCISzGt8d0R5ubciAwA'}>
                Mission Statement
                <MissionStatement/>
            </Route>

            <Route path={path+'/banner'}>
                banner
            </Route>

            <Route path={path+'/socialMediaLinks'}>
                socialMediaLinks
            </Route>
           
        </div>
    )
}

      
            {/* <Route exact path={path}>
                HOME
            </Route>

            <Route path={path+'/logo'}>
                
            </Route>

            <Route path={path+'/topNavBar'}>
                Top Nav Bar
            </Route> */}