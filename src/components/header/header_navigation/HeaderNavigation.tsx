import React from 'react';
import '../header_navigation/HeaderNavigation.scss'
import headerImage from '../../../media/logo.png'
import { Link } from 'react-router-dom';
import FavouritesButton from './favouritesButton/FavouritesButton';

function HeaderNavigation() {

    return (<header className="headerNavigation">
        <div className="logo">
            <Link to="/">
                <img src={headerImage} alt="logo"/>
            </Link>
        </div>
        <nav className="menu">
            <div> <Link to="/"> HOME </Link> </div>
            <div>  TOURS </div>
            <div>  ABOUT </div>
            <div>  HELP  </div>
        </nav>
        <div className="buttons">
            <Link to="/favourites">
                <FavouritesButton/>
            </Link>
            <button className="signInButton">
                SIGN IN
            </button>
        </div>
            </header>);
}

export default HeaderNavigation;
