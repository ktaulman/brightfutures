import React from 'react';

export default function Spacer({height,width}){
   
    
    return(
        <div style={{margin:`${height} ${width||0}`}}>
         &nbsp;
        </div>
    )
}