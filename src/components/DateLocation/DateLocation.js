import React from 'react';
import clock_svg from './clock.svg';
import location_svg from './location.svg';
export default function DateLocation({ date, location }) {
    return (<section style={{
        fontFamily: 'Roboto-Thin',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '11px'
    }}>
        <p style={{ margin: '0', display: 'flex' }}>
            <img src={clock_svg} style={{ marginRight: '10px' }} />
            <span>{date}</span>
        </p>
        <p style={{ margin: '0', display: 'flex' }}>
            <img src={location_svg} style={{ marginRight: '10px', display: 'inline-block' }} />
            <span style={{ display: 'inline' }}>{location}</span>
        </p>
    </section>);
}
