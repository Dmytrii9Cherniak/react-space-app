import React from 'react';
import { useQuery } from '@apollo/client';
import { CardModel } from '../../../models/CardModel';
import { useRecoilValue } from 'recoil';
import Slider from "react-slick";
import ListItem from '../listItem/ListItem';
import { LAUNCHES_QUERY } from '../../../index';
import { imagesState } from '../../../atom/atom'
import '../lists/List.scss'

function List() {

    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    const images = useRecoilValue(imagesState);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4500,
        cssEase: "linear"
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error :(</p>;
    }

    return (<div className="fullListBlock">
                <main className="contentListBlock">
                    <header className="headerAndButtons" id="tours">
                        <h3> Popular tours </h3>
                        <div className="buttons">
                            <button>
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L8.5 8L1.5 15" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button>
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 1L1.5 8L8.5 15" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </header>
                    <div>
                        <Slider {...settings} className="items">
                            {data.rockets.map((rocket: CardModel, index: number) => (
                                <ListItem
                                    key={rocket.id}
                                    id={rocket.id}
                                    name={rocket.name}
                                    description={rocket.description}
                                    image={images[index % images.length]}
                                />
                            ))}
                        </Slider>
                    </div>
                </main>
            </div>
    );
}
export default List;
