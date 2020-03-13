import React,{useState,useEffect} from 'react';

import {Route} from "react-router-dom";
//Routes 
import AboutUs from './routes/AboutUs';
import Blog from './routes/Blog';

import Home from './routes/Home';
// import Volunteer from './routes/Volunteer';
// import Donate from './routes/Donate';
// import Events from './routes/Events';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo';
import DropDown from './components/DropDown/DropDown';
import NavigationLinks from './components/NavigationLinks/NavigationLinks'


function App(){
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null);
    const [isCorrectPassword,setIsCorrectPassword]=useState(true)
    const[screenWidth,setScreenWidth]=useState(window.innerWidth)
    //window resize effect 
    useEffect(()=>{
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    })

    const openPassword=process.env.REACT_APP_OPEN_PASSWORD
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
  
    return(
       <>
            <Header>
                <Logo/>
       
                {
                    screenWidth<=700?
                    <DropDown 
                        dropDownContent={<NavigationLinks column color="#FFFFFF"/>
                    }/>:
                    <NavigationLinks row noBackground color="" />
                
                }
            </Header>

            <Route exact path='/'>
                <Home />
            </Route>
            
            <Route path='/aboutus'>
                <AboutUs/>
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Footer>
                {/* <NavigationLinks row noBackground style={{fontSize:'16px',color:'#00000'}}/> */}
            </Footer>
    </>
    )
}
export default App;
