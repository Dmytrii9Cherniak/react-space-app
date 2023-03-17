import React from 'react';
import '../header/Header.scss';
import headerImage from '../../media/headerImg.png';
import HeaderNavigation from './header_navigation/HeaderNavigation';
import HeaderTopText from './headerTopText/HeaderTopText';
import HeaderBottomText from './headerBottomText/HeaderBottomText';

function HeaderMainPage() {
    return (
        <header className="mainHeaderBlock">
            <div className="headerImageBlock">
                <HeaderNavigation/>
                <img src={headerImage} alt="HeaderTopImage"/>
                <HeaderTopText/>
                <HeaderBottomText/>
            </div>
        </header>);
}

export default HeaderMainPage;
