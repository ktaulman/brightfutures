import React,{useState} from 'react';



export default function DropDown ({dropDownContent}){
    //css styling 
    const style_button={
        padding:"10px",
        border:'none'
    };
    
    const style_container={
        position:'relative',
    }
    const style_content={
        position:'fixed',
        zIndex:'1',
        right:'0',
        marginTop:'40px',
        overflow:'auto'
    }
    //state
    const [isToggled,setToggle]=useState(false);

    return(
        <div style={style_container}>
            <button 
                style={style_button}
                onClick={()=>setToggle(!isToggled)}
            >

                <svg width="28px" height="19px" viewBox="0 0 28 19" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <g id="Iphone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                            <g id="Home" transform="translate(-319.000000, -21.000000)" stroke="#62AC9A" stroke-width="2">
                                <g id="Button__BarsMenu" transform="translate(319.000000, 21.000000)">
                                    <path d="M1,1.1875 L27,1.1875 M1,9.10416667 L27,9.10416667 M1,17.8125 L27,17.8125" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </g>
                    </svg>

            </button>


            {isToggled?
                <span style={style_content}>{dropDownContent}</span>:
                null
            }
        </div>
    )
}