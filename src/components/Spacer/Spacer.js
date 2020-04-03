import React from 'react';

export default function Spacer({id,height,width}){
   console.log('spacer call',height,width)
    
    return(
        <div id={id }style={{margin:`${(height)||0} ${width||0}`}}>
         &nbsp;
        </div>
    )
}