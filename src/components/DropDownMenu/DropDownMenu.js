import React,{useState} from 'react';
import './DropDownMenu.css'



export default function DropDownMenu({buttonsArray}){
    const [selectedButton,setSelectedButton]=useState(null);
    const [barColor,setBarColor]=useState(null);

    return(
        <section
        className="DropDownMenu">
        <div 
            className='DropDownMenu__buttonsContainer'
            style={{
                borderBottom:`6px ${barColor} solid`,
            }}
        > 
           {buttonsArray.map((button,index)=>{

                function handleClick(){
                    setBarColor(button.backgroundColor);
                    setSelectedButton(button.component);
                }

                return(
                    <button
                        className='DropDownMenu__button'
                        style={{
                            backgroundColor:button.backgroundColor||"#7E62AC", 
                        }}
                        onClick={()=>handleClick()}
                    >
                    {button.label}
                    </button>
                )
            })}

        </div>
        <div className='DropDownMenu__content'>
            {selectedButton?
                <button 
                    className='DropDownMenu__closeButton'
                    onClick={()=>{
                        setBarColor('#FFFFFF')
                        setSelectedButton(null)
                    }}
                >
                    X
                </button>
            :null}
            {selectedButton}
        </div>
        </section>
    )
}
