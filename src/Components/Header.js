import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import Logo from '../Images/téléchargement.png';

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Link to="/" className="font-bold">
                <img src={Logo} className="logo"/>
            </Link>

            <Navigation />
        </header>
    )
}

export default Header