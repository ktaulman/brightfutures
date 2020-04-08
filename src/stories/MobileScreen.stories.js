import React from 'react';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import DropDown from '../components/DropDown/DropDown';
import TextSection from '../components/TextSection/TextSection';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import photo_dancers from '../components/FeatureCard/photo_dancers.png';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import twitter from '../components/SocialLinks/twitter.svg';
import instagram from '../components/SocialLinks/instagram.svg';
import facebook from '../components/SocialLinks/facebook.svg';
import linkedin from '../components/SocialLinks/linkedin.svg';
import MailingListForm from '../components/MailingListForm/MailingListForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'

export default{
    title:'Mobile'
}

export const mobile=()=>{
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
            margin:'10px 0px 10px 0px'
        };
    
        return(
            <div style={style_div}>
                <a style={style_a}><b>Home</b></a>
                <a style={style_a}>Events</a>
                <a style={style_a}>Volunteer</a>
                <a style={style_a}>Donate</a>
                <a style={style_a}>Blog</a>
            </div>
        )    
    }
    const buttonsArray=[
        {
            backgroundColor:'#7E62AC',
            label:'Donate',
            component:<TextSection
                title='How to Donate'
                body='See below that our Strip payment systtem can take cash check and other forms of materials.'
                color='#7E62AC'
            />
        },
        {
            backgroundColor:"#AC9562",
            label:'Events',
            component:<TextSection
                title="Upcoming Events"
                body="We have our upcoming Summer Camp from June 6-10, 2020."
                color='#AC9562'
            />
        },
        {
            backgroundColor:"#AC6F62",
            label:'Volunteer',
            component:<TextSection
                title='How to Volunteer'
                body='We would like to have as many volunteers for our upcoming events as possible. Sign up today to hear frrom our team. '
                color='#AC6F62'
            />
        }
    ]

    const icons=[twitter,instagram,facebook,linkedin]

    return(
        <html style={{
            width:'368px',
            minHeight:'667px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>

            <Header>
                <Logo/>
                <DropDown dropDownContent={<ExampleDiv/>}/>
            </Header>
            <body style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center'
            }}
            
            >
                    <TextSection 
                        title={'Our mission is to grow children into dreamers.'}
                        body={"With melody and movement,we foster the creativity of Atlanta’s growing minds through the art of dance. Our mission to teach life skills through hands-on training and events."}
                    />
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

            <DropDownMenu
                buttonsArray={buttonsArray}
            />



            <SocialLinks
                label={'Get Connected'}
                iconsArray={icons}
            />
            <MailingListForm label={"Sign Up for Our Mailing List"} />
            
            <ContactInfo
                phone={"407-568-8967"}
                email={'info@awtdance.online'}
                address={"3000 Winderhall Rd, Atlanta, GA 30326"}
            />

            <footer style={{
                backgroundColor:'#62AC9A', 
                width:'100%',
                height:"auto", 
                textAlign:'center',
                padding:'20px',
                color:'white',
                fontFamily:'roboto-thin',
                fontSize:'1.5em',
                letterSpacing:'2.5px',
                marginTop:'10px'
                }}>
                ALWAYS WANTED TO DANCE COMPANY
            </footer>
            </body>

        </html> 
    )
}