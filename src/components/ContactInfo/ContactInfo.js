import React from 'react';
import phone_svg from './phone.svg';
import email_svg from './email.svg';
import address_svg from './address.svg';

import './ContactInfo.css';

export default function ContactInfo({
        title,titleColor,
        phone,phoneColor,
        email,emailColor,
        address,addressColor
    }){
    
    return(
    <address className='ContactInfo'>
        <ul className='ContactInfo__list'>
            <h2 
                className="ContactInfo__title"
                style={{color:titleColor}}
            >
                {title}
            </h2>
            <li>
            <img 
                src={phone_svg} 
                style={{
                    marginRight:'10px'
                }}
                alt='phone'
            />
            <a 
            className='ContactInfo__link'
            style={{color:phoneColor}}
            href={`tel:${phone}`}>{phone||'phone'}</a>

            </li>
            <li>
                <img 
                    src={email_svg} 
                    style={{
                        marginRight:'10px'
                    }}
                    alt='phone'
                />
                <a 
                className="ContactInfo__link"
                style={{color:emailColor}}
                href={`mailto${email}`}>{email||'email'}</a>
            </li>

            <li>
                <img 
                    src={address_svg} 
                    style={{
                        marginRight:'10px'
                    }}
                    alt='email'
                />
                <p
                    style={{
                        display:'inline',fontStyle:'normal',
                        color:addressColor
                    }}
                >
                    {address||'address'}
                </p>
            </li>
        </ul>
     </address>
    )
}