import React from 'react';
import BrainTree from '../components/BrainTree/BrainTree'
import TextSection from '../components/TextSection/TextSection'
import Spacer from '../components/Spacer/Spacer'

export default function Donate(){
    return(
        <>
        <Spacer height='50px'/> 
        <TextSection
            label='HELP OUR CAUSE'
            body='Delivering on our mission requires fundraising from our amazing community. Any donation is appreciated and we promise to make an impact with your investment.'
        />
        
        <BrainTree />
        <Spacer height='50px'/>
        </>
    )
}