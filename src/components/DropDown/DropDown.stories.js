import React from 'react';
import DropDown from './DropDown'

export default{
    component:DropDown,
    title:'DropDown'
}

export const Regular =(linksArray) =>{

    function ExampleDiv(){

        const style_div={
            marginTop:"10px",
            display:'flex',
            flexDirection:'column',
            width:'200px',
            backgroundColor:'#62AC9A',
            color:'white',
            alignItems:'center'
        };
        const style_a={
            fontFamily:'roboto-light',
            margin:'3px 0px 3px 0px'
        };
    
        return(
            <div style={style_div}>
                <a style={style_a}>Link</a>
                <a style={style_a}>Link</a>
                <a style={style_a}>Link</a>
                <a style={style_a}>Link</a>
                <a style={style_a}>Link</a>
            </div>
        )


        
    }
    return(
        <DropDown dropDownContent={<ExampleDiv/>}/>
    )
}