import React from 'react';
import './SocialLinks.css'


export default function SocialLinks({label,children,iconsArray, svgColor}){
       
      
        return (
            <div className="SocialLinks">
                <h2 
                    className='SocialLinks__label'
                >{label}</h2>
                <div className="SocialLinks__iconsContainer">
                    {iconsArray.map((icon)=>{
                       return( 
                                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                  <img  className='SocialLinks__img'src={icon.svg} alt=''/>
                                </a>
                           )
                    })}
                    {children}
                </div>
            </div>
        )
    }