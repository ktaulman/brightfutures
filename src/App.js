import React,{useState,useEffect} from 'react';

import {Route, NavLink,useRouteMatch} from "react-router-dom";
//Routes 
import Events from './routes/Events'
import Blog from './routes/Blog';
import Donate from './routes/Donate'
import Home from './routes/Home';
import Tickets from './routes/Tickets'


//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo';
import DropDown from './components/DropDown/DropDown';
import NavigationLinks from './components/NavigationLinks/NavigationLinks'
import './index.css'


import ModalWrapper from './components/ModalWrapper/ModalWrapper';
//Contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_DELIVERY_API_KEY,
    host:'cdn.contentful.com'
})
//font loader
var WebFont = require('webfontloader');





function App(){
    //React Router
    const {path,url}=useRouteMatch();
    
  
   
    //Modal State
    const[displayModal,setDisplayModal]=useState(false);

    //Header State 
    const [logoURL,setLogoURL]=useState(null);
    useEffect(()=>{
        content.getEntry('3NsR5rAC9LfDlmWyTrmJpq').then(res=>setLogoURL(res.fields.logo.fields.file.url))
    },[])

    //window resize effect
    const[screenWidth,setScreenWidth]=useState(window.innerWidth) 
    useEffect(()=>{
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        
    },[])
    //Handle Password Input  //PASSWORD View
    const openPassword=process.env.REACT_APP_OPEN_PASSWORD
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null);
    const [isCorrectPassword,setIsCorrectPassword]=useState(null);

      //Load WebFont via useEffect 
      useEffect(()=>{
        if(isCorrectPassword){
        content.getEntry("3M7edk6wN4UrT9q8Ok93CA").then(res=>{
            //Destructure font property
            const {font}=res.fields;
            //load from Google API 

            WebFont.load({
                google:{
                    families:[font]
                },
                fontactive:function(fontFamily,fvd){
                    console.log(fontFamily)
                    const app=document.querySelector('#app')
                
                    const buttons=document.querySelectorAll(`[class*=__button]`)
                  
                        console.log(buttons, app)

                    app.style.fontFamily=fontFamily;

                    buttons.forEach(button=>button.style.fontFamily=fontFamily)
                }
            })
        })}
    },[isCorrectPassword])
   
    function handlePasswordSubmit(){
        if(password===openPassword){
            setIsCorrectPassword(true)
        }else{
            setError('ERROR:WRONG PASSWORD')
            setTimeout(function(){
                setError(null)
            },1000)
        }
    }

    //RENDERING (CONDITIONAL) BELOW
    //
    //Prompt User Password Entrance
    if(!isCorrectPassword){
 
        return(
    
        <div>
            <h1>Enter Unlock</h1>
     
            <input 
                type='password' 
                onChange={(e)=>setPassword(e.target.value)}
                onKeyPress={(e)=>
                    e.key==='Enter'?handlePasswordSubmit():null
                }
            ></input>
           
            <button 
                onClick={handlePasswordSubmit}
                type='submit'
            >Submit</button>
            <div>{error}</div>
        </div>
        )
    }


    //FUNCTIONS
    
    function openModal(){
        setDisplayModal(true)
        document.getElementById('main').classList.add('--opacity')
    }
    function closeModal(){
        setDisplayModal(false)
        document.getElementById('main').classList.remove('--opacity')
    }

   
    return(
        <div id='app'>
       
        <ModalWrapper   
            displayModal={displayModal}
            handleClose={closeModal}
            title="Buy Event Ticket"
            >
            <div id="eventbrite-widget-container-100295540662"></div>
        </ModalWrapper>
            <Header>
                <NavLink to={url}><Logo url={logoURL}/></NavLink>
                
               {
                    screenWidth<=700?
                    <DropDown 
                        dropDownContent={<NavigationLinks column color="#FFFFFF"/>
                    }/>:
                    <NavigationLinks row noBackground color="" />
                
                }
            </Header>
           
            <Route exact path={path}>
                <Home openModal={openModal}/>
            </Route>
            
            <Route path={path+'/donate'}>
                DONATE
                <Donate/>
            </Route>
            <Route path='/tickets'>
                <Tickets />
            </Route>

            <Route path='/events'>
                <Events/>
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Footer>
               
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/donate'>Donate</NavLink>
                <NavLink to='/tickets'>Tickets</NavLink>
                <NavLink to='/aboutUs'>About</NavLink>
                {/* <NavigationLinks row noBackground style={{fontSize:'16px',color:'#00000'}}/> */}
                <NavLink to='/news'>News</NavLink>
            </Footer>
      
                </div>
    )
}
export default App;
