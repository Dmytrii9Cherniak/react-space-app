import React from 'react';
import '../favourites/Favourites.scss';
import headerImage from '../../media/headerFavouritesImg.png'
import HeaderNavigation from '../header/header_navigation/HeaderNavigation';
import { favouritesState } from '../../atom/atom';
import { useRecoilValue } from 'recoil';
import ListItem from "../main/listItem/ListItem";

function Favourites() {

    const favourites = useRecoilValue(favouritesState);

    const clearAll = () => {

    }

    return (<div className="mainFavouritesBlock">
        <div className="headerImageBlock">
            <HeaderNavigation/>
            <img src={headerImage} alt="favouritesHeaderImage"/>
            <main>
                <div className="favouritesContent">
                   <h4> Favourites </h4>
                </div>
            </main>
            <footer className="footerBlockItems">
                <div className="footerItemList">
                    <div className="clearAllHeader"> Clear all </div>
                    {favourites.map((item, index) => (
                        <ListItem key={index} {...item} />
                    ))}
                </div>
            </footer>
        </div>
            </div>);
}

export default Favourites;
