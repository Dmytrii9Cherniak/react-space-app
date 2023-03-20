import { atom } from 'recoil';
import firstImage from '../media/firstCartImage.png';
import secondImage from '../media/secondImagePhoto.png'
import thirdImage from '../media/thirdImagePhoto.png'
import {CardModel} from "../models/CardModel";

export const imagesState = atom({
    key: 'arrayImages',
    default: [
        firstImage,
        secondImage,
        thirdImage
    ]
});

export const favouritesState = atom<CardModel[]>({
    key: 'favouritesState',
    default: [],
});
