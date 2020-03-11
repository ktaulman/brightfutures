import React from 'react';
import './Header.css';

export default function Header ({style,children}){
    return(
        <header className="header"style={style}>
            {children}
        </header>
    )
}