import React from 'react';
import DropDownMenu from './DropDownMenu';
import TextSection from '../TextSection/TextSection';

export default{
    component:DropDownMenu,
    title:'DropDownMenu'
}

export const defaultState = () =>{
    const buttonsArray=[
        {
            backgroundColor:'#7E62AC',
            label:'Donate',
            component:<TextSection
                title='How to Donate'
                body='See below that our Strip payment systtem can take cash check and other forms of materials.'
                color={'#7E62AC'}
            />
        },
        {
            backgroundColor:"#AC9562",
            label:'Events',
            component:<TextSection
                title="Upcoming Events"
                body="We have our upcoming Summer Camp from June 6-10, 2020."
                color={"#AC9562"}
            />
        },
        {
            backgroundColor:"#AC6F62",
            label:'Volunteer',
            component:<TextSection
                title='How to Volunteer'
                body='We would like to have as many volunteers for our upcoming events as possible. Sign up today to hear frrom our team. '
                color={"#AC6F62"}
            />
        }
    ]

    return(
        <DropDownMenu
            buttonsArray={buttonsArray}
        />
    )
}