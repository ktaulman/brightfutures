import React from 'react';
import './FeatureCard.css';

export default function FeatureCard ({
    title,titleColor,
    caption,captionColor,
    details, detailsColor,
    backgroundImageURL
    ,buttonsArray}){
    return(
        
        <section 
            id='FeatureCard'
            className="FeatureCard"   
       >
         <div
        style={{ 
         
             backgroundImage:`url(${backgroundImageURL})`,
             backgroundPosition:'center',
             backgroundSize:'100% 100%',
             backgroundRepeat:'no-repeat'
    
        }}
        className="FeatureCard__background"
            alt=''
            ></div>
        <div className='FeatureCard__textWrapper'>
       

            <h2 style={{color:titleColor}} className='FeatureCard__title' >{title}</h2>
            <h3 style={{color:captionColor}} className='FeatureCard__caption'>{caption}</h3>
            <h3 style={{color:detailsColor}} className='FeatureCard__details'>{details}</h3>
        </div>

         <div className='FeatureCard__buttonsWrapper'>
               {buttonsArray?
                    buttonsArray.map((el,i)=>{
                        return(
                            <button 
                            key={"button"+ i}
                            className='FeatureCard__button'
                            style={{
                                color:el.textColor||'#FFFFFF',
                                backgroundColor:el.backgroundColor||'#000000',
                                fontSize:el.fontSize,
                                
  
                            }}
                            onClick={el.handleClick}
                            >
                                {el.label}
                            </button>

                        )
                    })
               :null}
           </div>
        </section>
    )
}