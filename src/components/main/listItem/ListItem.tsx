import React, {useState} from 'react';
import { CardModel } from '../../../models/CardModel';
import '../listItem/ListItem.scss';
import FavouritesButton from "../../header/header_navigation/favouritesButton/FavouritesButton";
import BuyButton from "./buyButton/BuyButton";

function ListItem({ id, name, description, image }: CardModel) {

    const [isOverflowing, setIsOverflowing] = useState(false);

    const handleHover = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.clientWidth < target.scrollWidth) {
            setIsOverflowing(true);
        } else {
            setIsOverflowing(false);
        }
    };

    return (<div key={id} className="cardItem" onMouseOver={handleHover}>
                <header className="image">
                    <img src={image} alt={name}/>
                </header>
                <main className="info">
                    <h3>{name}</h3>
                    <p className={isOverflowing ? "overflow" : ""}>{description}</p>
                    <footer className="buttons">
                        <BuyButton/>
                        <FavouritesButton/>
                    </footer>
                </main>
            </div>);
}

export default ListItem;
