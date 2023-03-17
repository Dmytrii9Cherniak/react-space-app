import React from 'react';
import '../favourites/Favourites.scss';
import headerImage from '../../media/headerFavouritesImg.png'
import HeaderNavigation from '../header/header_navigation/HeaderNavigation';

function Favourites() {
    return (<div className="mainFavouritesBlock">
        <div className="headerImageBlock">
            <HeaderNavigation/>
            <img src={headerImage} alt="favouritesHeaderImage"/>
            <main>
                <div className="favouritesContent">
                   <h4> Favourites </h4>
                </div>
            </main>
        </div>
            </div>);
}

export default Favourites;
