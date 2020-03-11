import React,{useState} from 'react';
import App from '../../App';
import ModalWrapper from './ModalWrapper';
import TextSection from '../TextSection/TextSection'
import dancers_svg from './dancers.svg';
import Button from '../Button/Button'
import DateLocation from '../DateLocation/DateLocation'
import Figure from '../Figure/Figure';

export default{
    component:'',
    title:'modal'
}

export const SampleView=()=>{
    const [showModal,setShowModal]=useState(true);

    function Modal(){
        return(
        <ModalWrapper 
            title={'Event Details'}
            handleClose={()=>setShowModal(false)}
        >
            <Figure 
                imageSrc={dancers_svg}
                title={"GIRL MAGIC"}
                caption={"Interactive and Empowering Camp"}
                description={'Girl Magic focuses on teaching young women about personal and professional growth via the beatiful art of dance.'}
            />

            <TextSection 
                label={'EARLY BIRD PRICING'}
                body={"$85 before June 1st"} 
                color='#62AC9A'
                centerAll sameColorAll 
                />
          
            <DateLocation 
                date={"June 6th-10th, 2020  (Daily: 9AM-4:30PM)"}
                location={"First Congregational Church Commons 125 Ellis Street, Atlanta, 30303"}
            />
            <Button label={"ENROLL"} color="#FFFFFF"/>
        </ModalWrapper>
        )
    }

    return(
        <html style={{zIndex:'0'}}> 
            <button 
            onClick={()=>setShowModal(!showModal)}
            >Show Modal</button>

            {showModal?<Modal/>:null}
            <App/>
        </html>
    )
}