import React from 'react';
import './FeatureCard.css';

export default function FeatureCard ({backgroundImage,backgroundColor,title,caption,description,buttonsArray}){
    return(
   
        <section 
            className="FeatureCard"
            style={{
                background:
                    backgroundImage?`url(${backgroundImage})`:backgroundColor,
                    backgroundRepeat:'no-repeat',
                    // backgroundSize:'100%',
                    backgroundPosition:'center'
            }}
       >
     
        <div className='FeatureCard__textWrapper'>
            <h2 className='FeatureCard__title' >{title}</h2>
            <h3 className='FeatureCard__caption'>{caption}</h3>
            <h3 className='FeatureCard__description'>{description}</h3>
        </div>

         <div className='FeatureCard__buttonsWrapper'>
                
               {buttonsArray?
                    buttonsArray.map(el=>{
                        return(
                            <button 
                            className='FeatureCard__button'
                            style={{
                                color:el.textColor||'#FFFFFF',
                                backgroundColor:el.backgroundColor||'#000000',
                                fontSize:el.fontSize,
                                
                            }}>
                                {el.label}
                            </button>

                        )
                    })
               :null}
           </div>
        </section>
    
    )
}