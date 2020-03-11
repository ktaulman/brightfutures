import React from 'react';
//Make these into components
export default function Figure({ imageSrc, title, caption, description }) {
    return (<figure style={{
        display: 'flex',
        flexDirection: 'column',
        width: "90%",
        maxWidth: '400px',
        margin: '0'
    }}>
        <img src={imageSrc} />

        <figcaption>
            <h2 style={{
                fontFamily: "Roboto-Bold",
                fontSize: "24px",
                color: "#7E62AC",
                letterSpacing: "3px",
                textTransform: 'uppercase',
                margin: "0"
            }}>
                {title}
            </h2>
            <p style={{
                fontFamily: "Roboto-Bold",
                fontSize: "10px",
                color: "#000000",
                letterSpacing: "0.75px",
                margin: "0"
            }}>{caption}</p>
            <p style={{
                fontFamily: "Roboto-Thin",
                fontSize: '10px',
                color: "#000000",
                letterSpacing: '.75px',
                lineHeight: '12px',
                margin: "0"
            }}>{description}</p>
        </figcaption>
    </figure>);
}
