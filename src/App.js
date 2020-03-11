import React,{useState,useEffect} from 'react';
import {Switch,Route,Link} from "react-router-dom";
//Routes 
import AboutUs from './routes/AboutUs';
import Blog from './routes/Blog';
import Donate from './routes/Donate';
import Events from './routes/Events';
import Home from './routes/Home';
import Volunteer from './routes/Volunteer';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo';
import DropDown from './components/DropDown/DropDown';
import NavigationLinks from './components/NavigationLinks/NavigationLinks'

const password1='123dance';

function App(){
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null);
    const [isCorrectPassword,setIsCorrectPassword]=useState(false)
    const[screenWidth,setScreenWidth]=useState(window.innerWidth)
    //window resize effect 
    useEffect(()=>{
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    })
    if(!isCorrectPassword){
        return(
        <div>
            <h1>Enter Unlock</h1>
            <input 
                type='password' 
                onChange={(e)=>setPassword(e.target.value)}
            ></input>
            {password}
            <button 
                onClick={()=>{
                    if(password===password1){
                        setIsCorrectPassword(true)
                    }else{
                        setError('ERROR:WRONG PASSWORD')
                        setTimeout(function(){
                            setError(null)
                        },1000)
                    }
                }}
                type='submit'
            >Submit</button>
            <div>{error}</div>
        </div>
        )
    }
    else{
    return(
       <>
            <Header>
                <Logo/>
                <span>{screenWidth}</span>
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
            
            <Route path='/events'> 
                <Events /> 
            </Route>
            <Route path='/volunteer'>
                <Volunteer />
            </Route>
            <Route path='/donate'>
                <Donate/>
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Footer>
                {/* <NavigationLinks row noBackground style={{fontSize:'16px',color:'#00000'}}/> */}
            </Footer>
    </>
    )}
}
export default App;
