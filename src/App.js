import React,{useState,useEffect} from 'react';

import {Route, NavLink,useLocation,useRouteMatch} from "react-router-dom";
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

function App(){
    //React Router
    const location=useLocation();
    const {path,url}=useRouteMatch();
    console.log('LINE 27 APP')
    console.log("LOCATION")
    console.log(location)
    console.log('PATH')
    console.log(path)
    console.log('URL')
    console.log(url)


    const[displayModal,setDisplayModal]=useState(false);
    //PASSWORD View
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null);
    const [isCorrectPassword,setIsCorrectPassword]=useState(true);
   
    //window resize effect
    const[screenWidth,setScreenWidth]=useState(window.innerWidth) 
    useEffect(()=>{
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    })
    //COMMMENT
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
    //Password View
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





    //modal logic
    function openModal(){
        setDisplayModal(true)
        document.getElementById('main').classList.add('--opacity')
    }
    function closeModal(){
        setDisplayModal(false)
        document.getElementById('main').classList.remove('--opacity')
    }

   
    return(
        <>
       
        <ModalWrapper   
            displayModal={displayModal}
            handleClose={closeModal}
            title="Buy Event Ticket"
            >
            <div id="eventbrite-widget-container-100295540662"></div>
        </ModalWrapper>
            <Header>
                <NavLink to={url}><Logo/></NavLink>
                
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
      
                </>
    )
}
export default App;
