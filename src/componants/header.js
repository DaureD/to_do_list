import React from 'react'

function Header(props){
    return (
        <header className="Header">
            {props.title}
        </header>   
    );
}

export default Header