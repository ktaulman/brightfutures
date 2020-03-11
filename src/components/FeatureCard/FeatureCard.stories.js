import React from 'react';
import FeatureCard from './FeatureCard'
import photo_dancers from './photo_dancers.png';


export default{
    component:'',
    title:'Features Card'
}


export const display=()=>{
    return(
        <FeatureCard
            backgroundImage={photo_dancers}
            title={'2020 Camp Girl Magic'}
            caption={'June 6-10,2020'}
            description={'The Art and Passion of Dance for Our Youth'}
            buttonsArray={[
                {
                    textColor:'#FFFFFF',
                    backgroundColor:'#AC6F62',
                    href:"#",
                    label:'Registration'
                },
                {
                    textColor:'#000000',
                    backgroundColor:'#62AC9A',
                    href:"#",
                    label:'Learn More'
                }
            ]}
        /> 
    )
}