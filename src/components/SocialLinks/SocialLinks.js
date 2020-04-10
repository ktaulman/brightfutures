import React from 'react';
import './SocialLinks.css'


export default function SocialLinks({title,titleColor,children,iconsArray, svgColor}){
    console.log(title,titleColor)
      
        return (
            <div className="SocialLinks">
                <h2 
                    className='SocialLinks__label'
                    style={{color:titleColor}}
                >{title}</h2>
                <div className="SocialLinks__iconsContainer">
                    {iconsArray.map((icon,index)=>{
                       return( 
                                <a 
                                key={'a'+index}
                                href={icon.href} target="_blank" rel="noopener noreferrer">
                                  <img  className='SocialLinks__img'src={icon.svg} alt=''/>
                                </a>
                           )
                    })}
                    {children}
                </div>
            </div>
        )
    }