import React, { useState } from 'react';
import { CardModel } from '../../../models/CardModel';
import '../listItem/ListItem.scss';
import FavouritesButton from '../../header/header_navigation/favouritesButton/FavouritesButton';
import BuyButton from './buyButton/BuyButton';

function ListItem({ id, name, description, image }: CardModel) {


    return (<div key={id} className="cardItem">
                <header className="image">
                    <img src={image} alt={name}/>
                </header>
                <main className="info">
                    <h3> {name} </h3>
                    <p> {description} </p>
                    <footer className="buttons">
                        <BuyButton/>
                        <FavouritesButton/>
                    </footer>
                </main>
            </div>);
}

export default ListItem;
