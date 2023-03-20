import React from 'react';
import { CardModel } from '../../../models/CardModel';
import '../listItem/ListItem.scss';
import BuyButton from './buyButton/BuyButton';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { favouritesState } from '../../../atom/atom';

function ListItem({id, name, description, image}: CardModel) {

    const location = useLocation();
    const [favourites, setFavourites] = useRecoilState(favouritesState);

    const addToFavourites = () => {
        const newFavourites = [...favourites, { id, name, description, image }];
        setFavourites(newFavourites);
    };

    const removeFromFavourites = () => {
        const index = favourites.findIndex(item => item.id === id);
        if (index !== -1) {
            const updatedFavourites = [...favourites];
            updatedFavourites.splice(index, 1);
            setFavourites(updatedFavourites);
        }
    };

    return (<div key={id} className="cardItem">
        <header className="image">
            <img src={image} alt={name}/>
        </header>
        <main className="info">
            <h3> {name} </h3>
            <p> {description} </p>
            <footer className="buttons">
                <BuyButton/>
                {location.pathname !== '/favourites'
                    ? <button className="favouritesButton" onClick={addToFavourites}>
                        <svg width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.98311 0.315291C1.31152 1.49738 -0.326136 5.50569 0.90482 9.32952C1.52947 11.1301 2.54534 12.7485 3.88004 14.0762C5.71101 15.8545 7.72254 17.4194 9.88488 18.7491L10.1304 18.8961C10.3656 19.0369 10.6598 19.0344 10.8926 18.8897L11.1218 18.7473C13.2812 17.4194 15.2927 15.8545 17.1174 14.0824C18.4584 12.7485 19.4743 11.1301 20.0937 9.34515C21.3291 5.50801 19.6847 1.4978 16.012 0.31535L15.7463 0.236231C14.0624 -0.226913 12.273 0.00130112 10.7645 0.855348L10.4964 1.01429L10.233 0.856235C8.64194 -0.04656 6.7404 -0.249969 4.98311 0.315291ZM9.87465 2.35427L10.0714 2.49538C10.3307 2.68111 10.6806 2.67742 10.936 2.48625C12.266 1.49057 13.9873 1.20082 15.5641 1.70669C18.4097 2.62284 19.7047 5.78096 18.7064 8.88199C18.165 10.4417 17.2687 11.8696 16.0916 13.0405L15.5636 13.5421C14.141 14.8642 12.6026 16.061 10.9691 17.1156L10.5013 17.4098L10.644 17.4998C8.58049 16.2308 6.65375 14.7319 4.90582 13.0343C3.73505 11.8696 2.83877 10.4417 2.29207 8.86635C1.29808 5.77801 2.58746 2.62212 5.43153 1.70646C6.93331 1.22339 8.57056 1.46289 9.87465 2.35427ZM14.3703 3.98374C13.9855 3.86093 13.5739 4.07304 13.451 4.45749C13.3281 4.84194 13.5404 5.25316 13.9252 5.37597C14.6814 5.61735 15.2206 6.29803 15.2881 7.10096C15.322 7.50313 15.6757 7.80175 16.0782 7.76794C16.4807 7.73413 16.7796 7.3807 16.7457 6.97853C16.6288 5.58859 15.6917 4.40551 14.3703 3.98374Z"
                            />
                        </svg>
                    </button>
                    : <button className="deleteButton" onClick={removeFromFavourites}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.8249 9.9682C19.8249 9.9682 19.2819 16.7032 18.9669 19.5402C18.8169 20.8952 17.9799 21.6892 16.6089 21.7142C13.9999 21.7612 11.3879 21.7642 8.77991 21.7092C7.46091 21.6822 6.63791 20.8782 6.49091 19.5472C6.17391 16.6852 5.63391 9.9682 5.63391 9.9682"
                                stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.2082 6.73969H4.25024" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M17.9407 6.73967C17.1557 6.73967 16.4797 6.18467 16.3257 5.41567L16.0827 4.19967C15.9327 3.63867 15.4247 3.25067 14.8457 3.25067H10.6127C10.0337 3.25067 9.5257 3.63867 9.3757 4.19967L9.1327 5.41567C8.9787 6.18467 8.3027 6.73967 7.5177 6.73967"
                                stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>}
            </footer>
        </main>
    </div>);
}

export default ListItem;
