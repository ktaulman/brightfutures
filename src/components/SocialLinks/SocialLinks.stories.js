import React from 'react';
import SocialLinks from './SocialLinks';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';


export default{
    component:SocialLinks,
    title:'Social Links'
}

export const DefaultView = () =>{
    const icons=[twitter,instagram,facebook,linkedin]

    return(
        <SocialLinks
            label={'Get Connected'}
            iconsArray={icons}
        />
    )
}