import React from 'react';
import phone_svg from './phone.svg';
import email_svg from './email.svg';
import address_svg from './address.svg';

import './ContactInfo.css';

export default function ContactInfo({phone,email,address}){
    return(
    <address className='ContactInfo'>
        <ul className='ContactInfo__list'>
            <h2 
                className="ContactInfo__title"
            >
                GET IN TOUCH
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
                    style={{display:'inline',fontStyle:'normal'}}
                >
                    {address||'address'}
                </p>
            </li>
        </ul>
     </address>
    )
}