import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavigationLinks.css'


export default function NavigationNavLinks({row,column,noBackground,color,children,style}){

   
    return(
        <nav 
            className='nav'
            style={{
                flexDirection:row?'row':column?'column':'row',
                backgroundColor:noBackground?'none':'#62AC9A',
                
                }}
        >


            <NavLink to='/events'className="nav__link" style={{color:color||'#000000',style}} activeClassName='nav__selected'>Events</NavLink>
    
            <NavLink to='aboutus' className="nav__link" style={{color:color||'#000000',style}} activeClassName='nav__selected'>
                About Us
            </NavLink>
            <NavLink to='/blog'className="nav__link" style={{color:color||'#000000',style}} activeClassName='nav__selected'>
            Blog</NavLink>
        </nav>
    )    
}